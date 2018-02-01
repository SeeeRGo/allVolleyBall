import React, { Component } from 'react';

import { View, Picker, ScrollView, Slider } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Rating } from 'react-native-elements';

import Row from '../../../components/common/Row';
import styles from './styles';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

const volleyballTypes = [
  'Классический',
  'Пляжный',
  'Пионербол'
];

const minPlayers = [
  ...Array(20).fill().map((e, i) => i.toString())
];
const maxPlayers = [
  ...Array(20).fill().map((e, i) => i.toString())
];


class FormFields extends Component {
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{ flex: 1 }}
        selectedValue={itemList[0]}
        onValueChange={(value) => playerFormUpdate(fieldName, value)}
      >
        {itemList.map((item) => <Picker.Item key={item} label={item} value={item} />)}
      </Picker>
    );
  }
  renderPickerItems(itemList) {
    return itemList.map((item) => <Picker.Item key={item} label={item} value={item} />);
  }
  render() {
    const {
      formInputStyle, formLabelStyle, containerStyle,
      datePickerStyle, ratingStyle, datepickerCustomStyle
    } = styles;
    return (
      <ScrollView>
        <View style={containerStyle}>
          <FormLabel>ПАФОСНЫЙ ЗАГОЛОВОК ПРО СОЗДАНИЕ ИГРЫ</FormLabel>
          <Row extraStyles={{ justifyContent: 'space-around' }}>
            <FormLabel labelStyle={[formLabelStyle]}>ТИП ИГРЫ*</FormLabel>
            <FormLabel labelStyle={[formLabelStyle]}>ВОЛЕЙБОЛ</FormLabel>
          </Row>
          {this.renderPicker('volleyballTypes', volleyballTypes)}
          <Row>
            <FormLabel labelStyle={[formLabelStyle]}>МИНИМУМ ИГРОКОВ</FormLabel>
            {this.renderPicker('minPlayers', minPlayers)}
          </Row>
          <Row>
            <FormLabel labelStyle={[formLabelStyle]}>МАКСИМУМ ИГРОКОВ</FormLabel>
            {this.renderPicker('maxPlayers', maxPlayers)}
          </Row>
          <Row>
            <FormLabel labelStyle={[formLabelStyle]}>УРОВЕНЬ</FormLabel>
            <Rating
              imageSize={20}
              startingValue={1}
              ratingCount={4}
              style={ratingStyle}
              onFinishRating={() => {}}
            />
          </Row>
          <FormLabel labelStyle={formLabelStyle}>ЦЕНА УЧАСТИЯ</FormLabel>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>0 Р</FormLabel>
            <Slider
              minimumValue={0}
              maximumValue={2000}
              step={100}
              style={{ width: 200 }}
              onSlidingComplete={(value) => console.log(value)}
            />
            <FormLabel labelStyle={formLabelStyle}>2000 Р</FormLabel>
          </Row>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>ДАТА И ВРЕМЯ ИГРЫ</FormLabel>
            <DatePicker
              style={datePickerStyle}
              date={moment().format('DD/MM/YY HH:mm')}
              mode="datetime"
              placeholder="select date"
              format="DD/MM/YY HH:mm"
              minDate="1920-01-01"
              maxDate="2012-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={datepickerCustomStyle}
              onDateChange={(value) => playerFormUpdate('birthDate', value)}
            />
          </Row>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>ВРЕМЯ НАЧАЛА</FormLabel>
            <DatePicker
              style={datePickerStyle}
              date={moment().format('HH:mm')}
              mode="time"
              placeholder="select date"
              format="HH:mm"
              minDate="0:00"
              maxDate="23:59"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={datepickerCustomStyle}
              onDateChange={(value) => playerFormUpdate('birthDate', value)}
            />
          </Row>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>ВРЕМЯ ОКОНЧАНИЯ</FormLabel>
            <DatePicker
              style={datePickerStyle}
              date={moment().format('HH:mm')}
              mode="time"
              placeholder="select date"
              format="HH:mm"
              minDate="0:00"
              maxDate="23:59"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={datepickerCustomStyle}
              onDateChange={(value) => playerFormUpdate('birthDate', value)}
            />
          </Row>
          <FormLabel labelStyle={[formLabelStyle]}>АДРЕС</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            onChangeText={(value) => playerFormUpdate('fbLink', value)}
          />
          <FormLabel labelStyle={[formLabelStyle]}>ОПИСАНИЕ</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            multiline
            onChangeText={() => {}}
          />
        </View>
      </ScrollView>
    );
  }
}


export default FormFields;
