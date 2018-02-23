import React, { Component } from 'react';
import { Text, View, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import { emailChanged, passwordChanged, loginUser } from '../actions';
import { FormLabel, FormInput, Button, Icon, Divider } from 'react-native-elements';

import { changeCredential, resetCredentials, submitSignupForm } from './actions';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import Logo from '../../components/common/Logo';
import CustomHeader from '../../components/common/CustomHeader';
import styles from './styles';
import navBarStyles from '../../components/common/CustomHeader/navBarStyles';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
  }
  state = {
    firstName: {
      active: false,
      valid: false
    },
    lastName: {
      active: false,
      valid: false
    },
    fatherName: {
      active: false,
      valid: false
    },
    phone: {
      active: false,
      valid: false
    },
    password: {
      active: false,
      valid: false
    },
    passwordRe: {
      active: false,
      valid: false
    }
  }

  handleSignup() {
    const {
      lastName, firstName, fatherName, phone, password,
      passwordRe, city
    } = this.props;
    console.log(phone);
    const formData = {
      firstName,
      lastName,
      fatherName,
      phone,
      password,
      city
    };
    this.props.submitSignupForm(formData);
    Actions.PhoneConfirmation({ phoneConfirmed: false });
  }
  renderCities(cityList) {
    return cityList.map((city, index) => <Picker.Item key={city} label={city} value={index} />);
  }

  render() {
    const {
      mainContainerStyle, formLabelStyle, formInputStyle, agreeTextStyle, dividerStyle, boldText,
      outsideTextStyle
    } = styles;
    const {
      lastName, firstName, fatherName, phone, password,
      passwordRe, city, changeCredential, resetCredentials
    } = this.props;
    return (
      <Background type="one">
        <CustomHeader title="Я - новенький" />
        <View style={mainContainerStyle}>
          <ScrollView style={{ height: '100%' }}>
            <Row extraStyles={{ justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 15 }}>
              <View>
                <FormLabel labelStyle={[formLabelStyle, { marginLeft: 0, marginBottom: 10 }]}>РЕГИСТРИРУЙТЕСЬ ЧЕРЕЗ</FormLabel>
                <Row>
                  <Icon
                    name="facebook"
                    type="font-awesome"
                    reverse
                    color="#415fa8"
                    size={18}
                    containerStyle={{ margin: 0, marginRight: 10 }}
                  />
                  <Icon
                    name="vk"
                    type="font-awesome"
                    reverse
                    color="#0077d9"
                    size={18}
                    containerStyle={{ margin: 0 }}
                  />
                </Row>
              </View>
              <Logo />
            </Row>
            <FormLabel labelStyle={[formLabelStyle, { marginTop: 10, marginBottom: 10 }]}>ИЛИ ЗАПОЛНИТЕ ФОРМУ</FormLabel>
            <FormLabel labelStyle={formLabelStyle}>ФАМИЛИЯ*</FormLabel>
            <FormInput
              inputStyle={formInputStyle}
              value={lastName}
              onChangeText={(value) => changeCredential('lastName', value)}
              underlineColorAndroid="transparent"
            />
            <Divider style={dividerStyle} />
            <FormLabel labelStyle={formLabelStyle}>ИМЯ*</FormLabel>
            <FormInput
              inputStyle={formInputStyle}
              value={firstName}
              onChangeText={(value) => changeCredential('firstName', value)}
              underlineColorAndroid="transparent"
            />
            <Divider style={dividerStyle} />
            <FormLabel labelStyle={formLabelStyle}>ОТЧЕСТВО</FormLabel>
            <FormInput
              inputStyle={formInputStyle}
              value={fatherName}
              onChangeText={(value) => changeCredential('fatherName', value)}
              underlineColorAndroid="transparent"
            />
            <Divider style={dividerStyle} />
            <Row extraStyles={{ justifyContent: 'space-between' }}>
              <FormLabel labelStyle={formLabelStyle}>ТЕЛЕФОН*</FormLabel>
              <FormLabel labelStyle={[formLabelStyle]}>+7 000 000 00 00</FormLabel>
            </Row>
            <FormInput
              inputStyle={formInputStyle}
              value={phone}
              onChangeText={(value) => changeCredential('phone', value)}
              underlineColorAndroid="transparent"
            />
            <Divider style={dividerStyle} />
            <Row extraStyles={{ marginTop: 7, marginBottom: 7 }}>
              <FormLabel labelStyle={[formLabelStyle, { color: '#091b75', height: 20, textAlignVertical: 'bottom' }]}>ГОРОД ПРОЖИВАНИЯ*</FormLabel>
              <Picker
                style={{ flex: 1, height: 20 }}
                selectedValue={city}
                onValueChange={(value) => changeCredential('city', value)}
              >
                {this.renderCities(cities)}
              </Picker>
            </Row>
            <Divider style={dividerStyle} />
            <FormLabel labelStyle={formLabelStyle}>ПАРОЛЬ*</FormLabel>
            <FormInput
              secureTextEntry
              inputStyle={formInputStyle}
              value={password}
              onChangeText={(value) => changeCredential('password', value)}
              underlineColorAndroid="transparent"
            />
            <Divider style={dividerStyle} />
            <Row extraStyles={{ justifyContent: 'space-between' }}>
              <FormLabel labelStyle={[formLabelStyle]}>ПОВТОРИТЕ ПАРОЛЬ*</FormLabel>
              <FormLabel labelStyle={[formLabelStyle]}>СОВПАДАЕТ</FormLabel>
            </Row>
            <FormInput
              secureTextEntry
              inputStyle={[formInputStyle]}
              value={passwordRe}
              onChangeText={(value) => changeCredential('passwordRe', value)}
              underlineColorAndroid="transparent"
            />
            <Divider style={dividerStyle} />
          </ScrollView>
        </View>
        <Text style={agreeTextStyle}>
          Регистрируясь, вы подтверждаете, что принимаете
          <Text style={boldText}>{'\n'}Условия использования{' '}</Text>
          и соглашаетесь с
          <Text style={boldText}>{'\n'}Политикой конфиденциальности</Text>
        </Text>
        <Row extraStyles={{
          maxHeight: 40, width: '100%', justifyContent: 'space-around', alignItems: 'center'
        }}
        >
          <Text style={outsideTextStyle} onPress={() => Actions.Auth()}>УЖЕ ЕСТЬ АККАУНТ</Text>
          <Row extraStyles={{
            maxHeight: 40, justifyContent: 'center', alignItems: 'center'
          }}
          >
            <Text style={outsideTextStyle}>ОТПРАВИТЬ</Text>
            <TouchableOpacity onPress={this.handleSignup}>
              <Icon
                name="arrow-right"
                type="font-awesome"
                reverse
                color="rgba(255,255,255,0.3)"
                size={18}
              />
            </TouchableOpacity>
          </Row>
        </Row>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  phone: state.signupForm.phone,
  password: state.signupForm.password,
  passwordRe: state.signupForm.passwordRe,
  firstName: state.signupForm.firstName,
  lastName: state.signupForm.lastName,
  fatherName: state.signupForm.fatherName,
  city: state.signupForm.city
});

export default connect(mapStateToProps, { changeCredential, submitSignupForm })(SignupForm);
