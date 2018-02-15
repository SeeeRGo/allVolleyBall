import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { FormLabel, Slider } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';
import { updateSearchFilter } from './actions';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const paidOrFree = [
  'paid',
  'free'
];

class PriceOptionsBlock extends Component {
  static defaultProps = {
    onSliderValueChange: () => {}
  }
  render() {
    const { formLabelStyle } = styles;
    return (
      <View style={{ width: SCREEN_WIDTH, backgroundColor: this.props.bgColor }}>
        <Row extraStyles={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={formLabelStyle}>СТОИМОСТЬ ИГРЫ</Text>
          <Slider
            value={paidOrFree.indexOf(this.props.paidOrFree)}
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
            onValueChange={(value) => updateSearchFilter('paidOrFree', paidOrFree[value])}
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
          onSlidingComplete={this.props.onSliderValueChange}
        />
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16 }]}>0 Р</FormLabel>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16, color: '#d4ff32' }]}>до 2000 Р</FormLabel>
        </Row>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  paidOrFree: state.searchFilter.paidOrFree
});

export default connect(mapStateToProps, { updateSearchFilter })(PriceOptionsBlock);
