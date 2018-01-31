import React, { Component } from 'react';
import { View, ScrollView, Text, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { FormInput, FormLabel, Button, CheckBox, Icon } from 'react-native-elements';
import Row from '../../components/common/Row';
import styles from './styles';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

class FormFields extends Component {
  renderCities(cityList) {
    return cityList.map((city) => <Picker.Item key={city} label={city} value={city} />);
  }
  render() {
    const {
      formInputStyle, formLabelStyle, containerStyle, datePickerStyle
    } = styles;
    return (
      <View style={containerStyle}>
        <FormLabel>ВЫ МОЖЕТЕ ИЗМЕНИТЬ СВОИ ДАННЫЕ</FormLabel>
        <FormLabel labelStyle={[formLabelStyle]}>ФАМИЛИЯ*</FormLabel>
        <FormInput inputStyle={[formInputStyle]} onChangeText={() => {}} />
        <FormLabel labelStyle={[formLabelStyle]}>ИМЯ*</FormLabel>
        <FormInput inputStyle={[formInputStyle]} onChangeText={() => {}} />
        <FormLabel labelStyle={[formLabelStyle]}>ОТЧЕСТВО</FormLabel>
        <FormInput inputStyle={[formInputStyle]} onChangeText={() => {}} />
        <FormLabel labelStyle={formLabelStyle}>Дата Рождения</FormLabel>
        <Row>
          <View>
            <DatePicker
              style={datePickerStyle}
              date="2016-05-01"
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36,
                  borderWidth: 0
                }
              }}
              onDateChange={() => {}}
            />
            <FormLabel labelStyle={[formLabelStyle]}>ТЕЛЕФОН*</FormLabel>
            <FormInput inputStyle={[formInputStyle, { maxWidth: 150 }]} onChangeText={() => {}} />
          </View>
          <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
            <FormLabel>ПОЛ</FormLabel>
            <Row extraStyles={{ justifyContent: 'space-around', alignItems: 'center', width: 150 }}>
              <Icon
                name="male"
                type="font-awesome"
                reverse
              />
              <Icon
                name="female"
                type="font-awesome"
                reverse
              />
            </Row>
          </View>
        </Row>
        <Row>
          <FormLabel>ГОРОД ПРОЖИВАНИЯ</FormLabel>
          <Picker
            style={{ flex: 1 }}
            selectedValue={cities[0]}
            onValueChange={() => {}}
          >
            {this.renderCities(cities)}
          </Picker>
        </Row>
        <FormLabel labelStyle={[formLabelStyle]}>СТРАНИЦА FACEBOOK</FormLabel>
        <FormInput inputStyle={[formInputStyle]} onChangeText={() => {}} />
        <FormLabel labelStyle={[formLabelStyle]}>СТРАНИЦА ВКОНТАКТЕ</FormLabel>
        <FormInput inputStyle={[formInputStyle]} onChangeText={() => {}} />
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel labelStyle={formLabelStyle} containerStyle={{ maxWidth: 150 }}>ПАРОЛЬ</FormLabel>
          <FormLabel labelStyle={formLabelStyle}>ИЗМЕНИТЬ</FormLabel>
        </Row>
        <FormInput inputStyle={formInputStyle} onChangeText={() => {}} />
        <FormLabel labelStyle={[formLabelStyle]}>ПОДТВЕРДИТЕ ПАРОЛЬ</FormLabel>
        <FormInput inputStyle={[formInputStyle]} onChangeText={() => {}} />
      </View>
    );
  }
}


export default FormFields;
