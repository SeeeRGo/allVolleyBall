import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, Slider } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Rating } from 'react-native-elements';

import Row from '../../../components/common/Row';
import { gameFormUpdate } from './actions';
import styles from './styles';
import PriceOptionsBlock from '../../Search/PriceOptionsBlock';

class RatingAndPriceBlock extends Component {
  render() {
    const { formLabelStyle, ratingStyle } = styles;
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FormLabel labelStyle={[formLabelStyle]}>УРОВЕНЬ</FormLabel>
        <Rating
          imageSize={20}
          startingValue={1}
          ratingCount={4}
          type="custom"
          ratingColor="white"
          ratingBackgroundColor="transparent"
          style={ratingStyle}
          onFinishRating={() => {}}
        />
        <PriceOptionsBlock />
      </View>
    )
  }
}

export default RatingAndPriceBlock;