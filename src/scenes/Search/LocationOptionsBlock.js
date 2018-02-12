import React, { Component } from 'react';
import { View, Text, Dimensions, Slider } from 'react-native';
import { } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class LocationOptionsBlock extends Component {
  render() {
    return (
      <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.14, backgroundColor: 'rgba(0,0,0, 0.25)' }}>
        <Row extraStyles={{
          width: SCREEN_WIDTH * 0.75, justifyContent: 'space-around', marginTop: 10, marginBottom: 10
        }}
        >
          <Text style={{ width: SCREEN_WIDTH * 0.25, textAlign: 'center' }}>МОЙ ГОРОД</Text>
          <Row extraStyles={{ width: SCREEN_WIDTH * 0.5, justifyContent: 'center' }}>
            <Text>ГОРОД</Text>
            <Slider
              value={0}
              minimumValue={0}
              maximumValue={1}
              step={1}
              style={{ minWidth: 40, maxHeight: 50 }}
              thumbTouchSize={{ width: 20, height: 20 }}

              thumbStyle={{
                width: 15, height: 15, marginBottom: 0, marginTop: 0
              }}
              onValueChange={(value) => {}}
            />
            <Text>РАЙОН</Text>
          </Row>
        </Row>
        <Row extraStyles={{ justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ width: SCREEN_WIDTH * 0.25, textAlign: 'center' }}>ТОЛЬЯТТИ</Text>
          <Text style={{ width: SCREEN_WIDTH * 0.5, textAlign: 'center' }}>САНКТ-ПЕТЕРБУРГ</Text>
          <Text style={{
            width: SCREEN_WIDTH * 0.25, textAlign: 'center', color: 'yellow', alignSelf: 'flex-end'
          }}
          >ВЫБРАТЬ
          </Text>
        </Row>
      </View>
    );
  }
}

export default LocationOptionsBlock;
