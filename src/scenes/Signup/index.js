import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { FormLabel, Icon, Divider } from 'react-native-elements';
import { Picker, Label } from 'native-base';

import Profile, { Profile as ProfileApi } from '../../api/Profile';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import Logo from '../../components/common/Logo';
import CustomHeader from '../../components/common/CustomHeader';
import Control from '../../components/FormControl';
import styles from './styles';
import { changeField } from './actions';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

class SignupForm extends Component {
  static propTypes = {
    changeField: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChangeControl = this.handleChangeControl.bind(this);
  }

  openUrlBySocialNetwork(socialNetwork) {
    const url = Profile.getUrlForGettingSocialNetwork(socialNetwork);
    Linking.openURL(url);
  }

  handleSignup() {
  }

  handleChangeControl(fieldName) {
    return (fieldValue) => this.props.changeField(fieldName, fieldValue);
  }


  handlePressAuthButton() {
    Actions.reset('Auth');
  }

  renderCities(cityList) {
    return cityList.map((city, index) => <Picker.Item style={{ backgroundColor: 'white' }} key={city} label={city} value={index} />);
  }

  render() {
    console.log(this.props.state, 'azazaz');
    const {
      mainContainerStyle, formLabelStyle, agreeTextStyle, dividerStyle, boldText,
      outsideTextStyle
    } = styles;
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
                    onPress={() => this.openUrlBySocialNetwork(ProfileApi.socialNetworks.facebook)}
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
            <Control
              label="Фамилия"
              value={get(this.props, 'state.user.secondName', '')}
              onChangeText={this.handleChangeControl('secondName')}
            />
            <Control
              label="Имя"
              value={get(this.props, 'state.user.firstName', '')}
              onChangeText={this.handleChangeControl('firstName')}
            />
            <Control
              label="Отчество"
              value={get(this.props, 'state.user.lastName', '')}
              onChangeText={this.handleChangeControl('lastName')}
            />
            <Control
              label="Телефон"
              labelInfo="+7 000 000 00 00"
              value={get(this.props, 'state.user.username', '')}
              onChangeText={this.handleChangeControl('username')}
            />
            <View
              style={{
                flexDirection: 'row', padding: 10, paddingTop: 15
              }}
            >
              <Label style={{ fontSize: 12, color: '#091b75', fontWeight: 'bold' }}>
                ГОРОД ПРОЖИВАНИЯ
              </Label>
              <Picker
                style={{ flex: 1, height: 20 }}
                mode="dropdown"
                selectedValue={get(this.props, 'state.user.city', '')}
                onValueChange={this.handleChangeControl('city')}
              >
                {this.renderCities(cities)}
              </Picker>
            </View>
            <Divider style={dividerStyle} />
            <Control
              label="Пароль"
              secureTextEntry
              value={get(this.props, 'state.user.password', '')}
              onChangeText={this.handleChangeControl('password')}
            />
            <Control
              label="Повторите пароль"
              secureTextEntry
              value={get(this.props, 'state.user.secondPassword', '')}
              onChangeText={this.handleChangeControl('secondPassword')}
            />
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
          <Text style={outsideTextStyle} onPress={this.handlePressAuthButton}>УЖЕ ЕСТЬ АККАУНТ</Text>
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
  state: state.signup
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldName, fieldValue) => dispatch(changeField(fieldName, fieldValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
