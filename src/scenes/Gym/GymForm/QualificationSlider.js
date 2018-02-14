import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Slider, Divider } from 'react-native-elements';

import Row from '../../../components/common/Row';
import styles from './styles';

class QualificationSlider extends Component {
  render() {
    const { formLabelStyle } = styles;
    return (
      <View>
        <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={[formLabelStyle, { fontSize: 16 }]}>{this.props.title}</Text>
          <Row extraStyles={{ justifyContent: 'center', alignItems: 'center' }}>
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
            <Text style={formLabelStyle}>ЕСТЬ</Text>
          </Row>
        </Row>
        <Divider />
      </View>
    );
  }
}

export default QualificationSlider;
