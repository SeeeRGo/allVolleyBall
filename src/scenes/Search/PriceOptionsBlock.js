import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { FormLabel, Slider } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class PriceOptionsBlock extends Component {
  render() {
    const { formLabelStyle } = styles;
    return (
      <View style={{ width: SCREEN_WIDTH }}>
        <Row extraStyles={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={formLabelStyle}>СТОИМОСТЬ ИГРЫ</Text>
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
          <Text style={formLabelStyle}>БЕСПЛАТНО</Text>
        </Row>
        <Slider
          minimumValue={0}
          maximumValue={2000}
          value={0}
          step={100}
          trackStyle={{ backgroundColor: 'white' }}
          minimumTrackTintColor="white"
          maximumTrackTintColor="white"
          thumbTintColor="#d4ff32"
          style={{ width: SCREEN_WIDTH * 0.9, alignSelf: 'center' }}
          onSlidingComplete={() => {}}
        />
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16 }]}>0 Р</FormLabel>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16, color: '#d4ff32' }]}>до 2000 Р</FormLabel>
        </Row>
      </View>
    );
  }
}

export default PriceOptionsBlock;
