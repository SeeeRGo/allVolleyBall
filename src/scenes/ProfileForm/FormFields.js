import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Icon } from 'react-native-elements';

import Row from '../../components/common/Row';
import GenderIcon from '../../components/common/Svg/GenderIcon';
import { playerFormUpdate } from './actions';
import styles from './styles';
import { SCREEN_WIDTH } from '../../components/common/Logo/index';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

class FormFields extends Component {
  static defaultProps = {
    gender: 'male'
  }
  renderCities(cityList) {
    return cityList.map((city) => <Picker.Item key={city} label={city} value={city} />);
  }
  render() {
    const {
      formInputStyle, formLabelStyle, containerStyle, datePickerStyle
    } = styles;
    const {
      lastName, firstName, fatherName, birthDate, fbLink, city,
      vkLink, phone, password, passwordRe, gender, playerFormUpdate
    } = this.props;
    return (
      <ScrollView>
        <View style={containerStyle}>
          <FormLabel>ВЫ МОЖЕТЕ ИЗМЕНИТЬ СВОИ ДАННЫЕ</FormLabel>
          <FormLabel labelStyle={[formLabelStyle]}>ФАМИЛИЯ*</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            onChangeText={(value) => playerFormUpdate('lastName', value)}
            value={lastName}
          />
          <FormLabel labelStyle={[formLabelStyle]}>ИМЯ*</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            onChangeText={(value) => playerFormUpdate('firstName', value)}
            value={firstName}
          />
          <FormLabel labelStyle={[formLabelStyle]}>ОТЧЕСТВО</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            onChangeText={(value) => playerFormUpdate('fatherName', value)}
            value={fatherName}
          />
          <FormLabel labelStyle={formLabelStyle}>Дата Рождения</FormLabel>
          <Row extraStyles={{ justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={{ justifyContent: 'space-around', alignItems: 'center', width: SCREEN_WIDTH * 0.4 }}>
              <DatePicker
                style={datePickerStyle}
                date={birthDate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1920-01-01"
                maxDate="2012-01-01"
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
                onDateChange={(value) => playerFormUpdate('birthDate', value)}
              />
              <FormLabel labelStyle={[formLabelStyle, { maxWidth: SCREEN_WIDTH * 0.35 }]}>ТЕЛЕФОН*</FormLabel>
              <FormInput
                inputStyle={[formInputStyle, { maxWidth: SCREEN_WIDTH * 0.35 }]}
                value={phone}
                onChangeText={(value) => playerFormUpdate('phone', value)}
              />
            </View>
            <View style={{ justifyContent: 'space-around', alignItems: 'center', width: SCREEN_WIDTH * 0.35 }}>
              <FormLabel>ПОЛ</FormLabel>
              <Row extraStyles={{ justifyContent: 'space-around', alignItems: 'center' }}>
                <GenderIcon title="М" active={gender === 'male'} />
                <GenderIcon title="Ж" active={gender === 'female'} />
              </Row>
            </View>
          </Row>
          <Row>
            <FormLabel>ГОРОД ПРОЖИВАНИЯ</FormLabel>
            <Picker
              style={{ flex: 1 }}
              selectedValue={city}
              onValueChange={(value) => playerFormUpdate('city', value)}
            >
              {this.renderCities(cities)}
            </Picker>
          </Row>
          <FormLabel labelStyle={[formLabelStyle]}>СТРАНИЦА FACEBOOK</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            value={fbLink}
            onChangeText={(value) => playerFormUpdate('fbLink', value)}
          />
          <FormLabel labelStyle={[formLabelStyle]}>СТРАНИЦА ВКОНТАКТЕ</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            value={vkLink}
            onChangeText={(value) => playerFormUpdate('vkLink', value)}
          />
          <Row extraStyles={{ justifyContent: 'space-between' }}>
            <FormLabel labelStyle={formLabelStyle} containerStyle={{ maxWidth: 150 }}>ПАРОЛЬ</FormLabel>
            <FormLabel labelStyle={formLabelStyle}>ИЗМЕНИТЬ</FormLabel>
          </Row>
          <FormInput
            secureTextEntry
            value={password}
            inputStyle={formInputStyle}
            onChangeText={(value) => playerFormUpdate('password', value)}
          />
          <FormLabel labelStyle={[formLabelStyle]}>ПОДТВЕРДИТЕ ПАРОЛЬ</FormLabel>
          <FormInput
            secureTextEntry
            value={passwordRe}
            inputStyle={[formInputStyle]}
            onChangeText={(value) => playerFormUpdate('passwordRe', value)}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  lastName: state.profileForm.lastName,
  firstName: state.profileForm.firstName,
  fatherName: state.profileForm.fatherName,
  birthDate: state.profileForm.birthDate,
  phone: state.profileForm.phone,
  address: state.profileForm.address,
  avatar: state.profileForm.avatar,
  vkLink: state.profileForm.vkLink,
  fbLink: state.profileForm.fbLink,
  city: state.profileForm.city,
  password: state.profileForm.password,
  passwordRe: state.profileForm.passwordRe,
  gender: state.profileForm.gender
});

export default connect(mapStateToProps, { playerFormUpdate })(FormFields);
