import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import _ from 'lodash';
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAq9ErfmlREYPuro-iwD1lQd3Ela_zolMA
import { updateSearchFilter } from '../Search/actions';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../styles';

class Map extends Component {
  static defaultProps = {
    resultType: 'locality',
    resultPath: 'data.results[0].formatted_address'
  }
  state = {
    x: null
  }
  getAddress = async () => {
    try {
      const { latitude, longitude } = this.state.x;
      let response;
      response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=${this.props.resultType}&language=ru&key=AIzaSyAq9ErfmlREYPuro-iwD1lQd3Ela_zolMA`);
      const result = _.result(response, this.props.resultPath);
      this.props.onAddressSubmit(this.props.addressUseType, result);
      console.log(result);
      Actions.pop();
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    console.log('Works');
    return (
      <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
        <MapView
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          initialRegion={{
            latitude: 55.753752,
            longitude: 37.622517,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={() => {}}
          onPress={(e) => this.setState({ x: e.nativeEvent.coordinate })}
        >
          {!!this.state.x && <Marker
            coordinate={this.state.x}
          />}
        </MapView>
        <Button
          containerViewStyle={{
            position: 'absolute', bottom: 23, width: '100%', marginLeft: 0, marginRight: 0
          }}
          title="ВЫБРАТЬ"
          buttonStyle={{ backgroundColor: '#00bfb1' }}
          onPress={this.getAddress}
        />
      </View>
    );
  }
}

export default connect(null, { updateSearchFilter })(Map);
