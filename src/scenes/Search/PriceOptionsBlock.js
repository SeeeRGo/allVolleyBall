import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { FormLabel, Slider } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';
import { updateSearchFilter } from './actions';
import { gameFormUpdate } from '../Game/GameForm/actions';
import { Actions } from 'react-native-router-flux';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const paidOrFree = [
  'paid',
  'free'
];


class PriceOptionsBlock extends Component {
  render() {
    const { formLabelStyle } = styles;
    const {
      price, updateSearchFilter, gameFormUpdate, use
    } = this.props;
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
          onValueChange={(value) => {
            if (use === 'searchFilter') return updateSearchFilter('price', value);
            return gameFormUpdate('price', value);
          }}
        />
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16 }]}>0 Р</FormLabel>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16, color: '#d4ff32' }]}>{price} Р</FormLabel>
        </Row>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    paidOrFree: state.searchFilter.paidOrFree,
    price: state[ownProps.use].price
  };
};

export default connect(mapStateToProps, { updateSearchFilter, gameFormUpdate })(PriceOptionsBlock);
