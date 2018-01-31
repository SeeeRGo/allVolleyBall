import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Icon } from 'react-native-elements';

import Row from '../../components/common/Row';
import { playerFormUpdate } from './actions';
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
    const {
      lastName, firstName, fatherName, birthDate, fbLink,
      vkLink, phone, password, passwordRe, playerFormUpdate
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
          <Row>
            <View>
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
              <FormLabel labelStyle={[formLabelStyle]}>ТЕЛЕФОН*</FormLabel>
              <FormInput
                inputStyle={[formInputStyle, { maxWidth: 150 }]}
                value={phone}
                onChangeText={(value) => playerFormUpdate('phone', value)}
              />
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
  password: state.profileForm.password,
  passwordRe: state.profileForm.passwordRe
});

export default connect(mapStateToProps, { playerFormUpdate })(FormFields);
