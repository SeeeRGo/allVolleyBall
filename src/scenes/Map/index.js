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
    resultType: 'locality'
  }
  state = {
    x: null
  }
  getAddress = async () => {
    try {
      const { latitude, longitude } = this.state.x;
      let response;
      // response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=${this.props.resultType}&language=ru&key=AIzaSyAq9ErfmlREYPuro-iwD1lQd3Ela_zolMA`);
      // const cityName = _.result(response, 'data.results[0].address_components[0].long_name');
      // this.props.updateSearchFilter('city', cityName);
      const bounds = '20.00,40.00|40.00,80.00';
      response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?result_type=${this.props.resultType}&bounds=${bounds}&language=ru&key=AIzaSyAq9ErfmlREYPuro-iwD1lQd3Ela_zolMA`);
      console.log(response);
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
            latitude: 53.53,
            longitude: 49.28,
            latitudeDelta: 0.922,
            longitudeDelta: 0.421
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
