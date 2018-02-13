import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class LocationOptionsBlock extends Component {
  render() {
    const { formLabelStyle } = styles;
    return (
      <View style={{
        width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.14, backgroundColor: 'rgba(0,0,0, 0.25)'
      }}
      >
        <Row extraStyles={{
          width: SCREEN_WIDTH * 0.75, justifyContent: 'space-around', alignItems: 'center', marginTop: 10, marginBottom: 10
        }}
        >
          <Text style={[formLabelStyle, { width: SCREEN_WIDTH * 0.25, textAlign: 'center' }]}>МОЙ ГОРОД</Text>
          <Row extraStyles={{ width: SCREEN_WIDTH * 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={formLabelStyle}>ГОРОД</Text>
            <Slider
              value={0}
              minimumValue={0}
              maximumValue={1}
              step={1}
              style={{
                minWidth: 35, maxHeight: 50, marginLeft: 20, marginRight: 20
              }}
              thumbTouchSize={{ width: 20, height: 20 }}
              minimumTrackTintColor="rgba(255, 255, 255, 0.5)"
              maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
              thumbTintColor="white"
              trackStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 7 }}
              thumbStyle={{
                width: 15, height: 15, marginBottom: 0, marginTop: 0
              }}
              onValueChange={(value) => {}}
            />
            <Text style={formLabelStyle}>РАЙОН</Text>
          </Row>
        </Row>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <Text style={[formLabelStyle, { width: SCREEN_WIDTH * 0.25, textAlign: 'center' }]}>ТОЛЬЯТТИ</Text>
          <Text style={[formLabelStyle, { width: SCREEN_WIDTH * 0.5, textAlign: 'center' }]}>САНКТ-ПЕТЕРБУРГ</Text>
          <Text style={[formLabelStyle, {
            width: SCREEN_WIDTH * 0.25, textAlign: 'center', color: 'yellow', alignSelf: 'flex-end'
          }]}
          >ВЫБРАТЬ
          </Text>
        </Row>
      </View>
    );
  }
}

export default LocationOptionsBlock;
