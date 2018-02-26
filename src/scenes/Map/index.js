import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAq9ErfmlREYPuro-iwD1lQd3Ela_zolMA
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../styles';

class Map extends Component {
  state = {
    placeId: null,
    x: null
  }
  printRegionChange = async (region) => {
    try {
      let response;
      response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&language=ru&key=AIzaSyAq9ErfmlREYPuro-iwD1lQd3Ela_zolMA`);
      this.setState({ placeId: response.data.results[0].place_id });
    } catch (e) {
      console.log(e)
    }
  }
  printAddressFromPlaceId = async (coords) => {
    try {
      let response;
      response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&language=ru&key=AIzaSyAq9ErfmlREYPuro-iwD1lQd3Ela_zolMA`);
      console.log(response);
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    console.log('Works');
    return (
      <View>
        <MapView
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 100 }}
          initialRegion={{
            latitude: 53.53,
            longitude: 49.28,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={this.printRegionChange}
          onPress={(e) => this.setState({ x: e.nativeEvent.coordinate })}
        >
          {!!this.state.x && <Marker
            coordinate={this.state.x}
          />}
        </MapView>
        <Button
          containerStyle={{ position: 'absolute', bottom: 0, width: SCREEN_WIDTH }}
          title="ВЫБРАТЬ"
          onPress={() => this.printAddressFromPlaceId(this.state.x)}
        />
      </View>
    )
  }
}

export default Map;
