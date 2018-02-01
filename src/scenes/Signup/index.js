import React, { Component } from 'react';
import { Text, View, Picker, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import { emailChanged, passwordChanged, loginUser } from '../actions';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import Logo from '../../components/common/Logo';
import { signupStyles } from '../../styles';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

class SignupForm extends Component {
  onButtonPress() {

  }
  renderCities(cityList) {
    return cityList.map((city, index) => <Picker.Item key={city} label={city} value={index} />);
  }

  render() {
    return (
      <Background>
        <View style={signupStyles.mainContainerStyle}>
          <ScrollView >
            <Row extraStyles={{ justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 15 }}>
              <View>
                <FormLabel labelStyle={[signupStyles.formLabelStyle, { marginLeft: 0, marginBottom: 10 }]}>РЕГИСТРИРУЙТЕСЬ ЧЕРЕЗ</FormLabel>
                <Row>
                  <Icon
                    name="facebook"
                    type="font-awesome"
                    reverse
                    color="midnightblue"
                    size={18}
                    containerStyle={{ margin: 0, marginRight: 10 }}
                  />
                  <Icon
                    name="vk"
                    type="font-awesome"
                    reverse
                    color="deepskyblue"
                    size={18}
                    containerStyle={{ margin: 0 }}
                  />
                </Row>
              </View>
              <Logo />
            </Row>
            <FormLabel labelStyle={{ marginTop: 10, marginBottom: 10 }}>ИЛИ ЗАПОЛНИТЕ ФОРМУ</FormLabel>
            <FormLabel labelStyle={[signupStyles.formLabelStyle]}>ФАМИЛИЯ*</FormLabel>
            <FormInput inputStyle={[signupStyles.formInputStyle]} onChangeText={() => {}} />
            <FormLabel labelStyle={[signupStyles.formLabelStyle]}>ИМЯ*</FormLabel>
            <FormInput inputStyle={[signupStyles.formInputStyle]} onChangeText={() => {}} />
            <FormLabel labelStyle={[signupStyles.formLabelStyle]}>ОТЧЕСТВО</FormLabel>
            <FormInput inputStyle={[signupStyles.formInputStyle]} onChangeText={() => {}} />
            <FormLabel labelStyle={[signupStyles.formLabelStyle]}>ТЕЛЕФОН*</FormLabel>
            <FormInput inputStyle={[signupStyles.formInputStyle]} onChangeText={() => {}} />
            <Row extraStyles={{ marginTop: 7, marginBottom: 7 }}>
              <FormLabel labelStyle={[signupStyles.formLabelStyle, { color: 'blue' }]}>ГОРОД ПРОЖИВАНИЯ*</FormLabel>
              <Picker
                style={{ flex: 1, height: 20 }}
                selectedValue={0}
                onValueChange={() => {}}
              >
                {this.renderCities(cities)}
              </Picker>
            </Row>
            <FormLabel labelStyle={[signupStyles.formLabelStyle]}>ПАРОЛЬ*</FormLabel>
            <FormInput secureTextEntry inputStyle={[signupStyles.formInputStyle]} onChangeText={() => {}} />
            <Row extraStyles={{ justifyContent: 'space-between' }}>
              <FormLabel labelStyle={[signupStyles.formLabelStyle, { maxWidth: '100%', marginRight: 0, flex: 1 }]}>ПОВТОРИТЕ ПАРОЛЬ*</FormLabel>
              <FormLabel labelStyle={[signupStyles.formLabelStyle, { maxWidth: '100%', marginLeft: 0, flex: 1 }]}>СОВПАДАЕТ</FormLabel>
            </Row>
            <FormInput secureTextEntry inputStyle={[signupStyles.formInputStyle]} onChangeText={() => {}} />
          </ScrollView>
        </View>
        <Text style={signupStyles.agreeTextStyle}>
          Регистрируясь, вы подтверждаете, что принимаете
          <Text style={{ fontWeight: 'bold' }}>{'\n'}Условия использования{' '}</Text>
          и соглашаетесь с
          <Text style={{ fontWeight: 'bold' }}>{'\n'}Политикой конфиденциальности</Text>
        </Text>
        <Row extraStyles={{ maxHeight: 40, justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={{ flex: 1, textAlign: 'center' }} onPress={() => Actions.Auth()}>УЖЕ ЕСТЬ АККАУНТ</Text>
          <Row extraStyles={{
            maxHeight: 40, flex: 1, justifyContent: 'center', alignItems: 'center'
          }}
          >
            <Text style={{ textAlign: 'center' }}>ОТПРАВИТЬ</Text>
            <Icon
              name="arrow-right"
              type="font-awesome"
              reverse
              color="rgba(1,1,1,0.5)"
              size={18}
            />
          </Row>
        </Row>
      </Background>
    );
  }
}

export default SignupForm;
