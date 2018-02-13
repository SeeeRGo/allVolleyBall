import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, Slider } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Rating, Divider, Icon } from 'react-native-elements';

import Row from '../../../components/common/Row';
import { gameFormUpdate } from './actions';
import styles from './styles';

const cities = [
  'ТОЛЬЯТТИ',
  'МОСКВА',
  'САНКТ-ПЕТЕРБУРГ'
];

const streets = [
  'МИРА',
  'ЛЕНИНА',
  'ПОБЕДЫ'
];

const houses = [
  '1',
  '2',
  '3'
];

class AddressAndInfoBlock extends Component {
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{ flex: 1, height: 30, alignItems: 'flex-end' }}
        selectedValue={this.props[fieldName]}
        onValueChange={(value) => this.props.gameFormUpdate(fieldName, value)}
      >
        {itemList.map((item) => <Picker.Item key={item} label={item} value={item} />)}
      </Picker>
    );
  }
  render() {
    const {
      formInputStyle, formLabelStyle, containerStyle,
      datePickerStyle, ratingStyle, datepickerCustomStyle
    } = styles;
    const {
      gameType, minPlayers, maxPlayers, price, gameFormUpdate,
      gameTime, startTime, finishTime, gameAddress, gameInfo
    } = this.props;
    return (
      <View style={containerStyle}>
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel>ГОРОД</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('city', cities)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Divider />
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel>УЛИЦА</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('street', streets)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel>ДОМ, ЗДАНИНЕ</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('house', houses)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Divider />
        <FormLabel>ОПИСАНИЕ ИГРЫ</FormLabel>
        <FormInput
          inputStyle={{height: 120, borderColor: 'gray', borderWidth: 1}}
          multiline
          placeholder="Пишем текст описания"
        />
      </View>
    )
  }
}

export default AddressAndInfoBlock;