import React, { Component } from 'react';
import { View, Slider, Text, Dimensions } from 'react-native';
import { FormLabel } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class PriceOptionsBlock extends Component {
  render() {
    const { formLabelStyle } = styles;
    return (
      <View style={{ width: SCREEN_WIDTH }}>
        <Row extraStyles={{ justifyContent: 'center'}}>
          <Text>СТОИМОСТЬ ИГРЫ</Text>
          <Slider
            value={0}
            minimumValue={0}
            maximumValue={1}
            step={1}
            style={{ minWidth: 40, maxHeight: 50}}
            thumbTouchSize={{width: 20, height: 20}}

            thumbStyle={{width: 15, height: 15, marginBottom: 0, marginTop: 0}}
            onValueChange={(value) => {}} 
          />
          <Text>БЕСПЛАТНО</Text>
        </Row>
        <Slider
          minimumValue={0}
          maximumValue={2000}
          value={0}
          step={100}
          style={{ width: SCREEN_WIDTH * 0.9, alignSelf: 'center' }}
          onSlidingComplete={() => {}}
        />
        <Row extraStyles={{ justifyContent: 'space-between'}}>
          <FormLabel labelStyle={formLabelStyle}>0 Р</FormLabel>
          <FormLabel labelStyle={formLabelStyle}>2000 Р</FormLabel>
        </Row>
      </View>
    )
  }
}

export default PriceOptionsBlock;