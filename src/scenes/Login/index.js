import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, Icon, Divider } from 'react-native-elements';
import { View, Linking, Text, Keyboard, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ProfileApi from '../../api/Profile';
import * as userActions from '../../actions/user';
import * as actions from './actions';

import Row from '../../components/common/Row';
import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import styles from './styles';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// TODO Смена стилей заголовков полей
// TODO Рефакторинг
// TODO Валидация и форматирование телефонов
// TODO Скрывать плэйсхолдер телефона

class LoginScene extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    changeCredential: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    loginBySocialNetwork: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleUpdateCredential = this.handleUpdateCredential.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleOpenURL = this.handleOpenURL.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.loginWithVkontakte = this.loginWithVkontakte.bind(this);
    this.getInitialURL = this.getInitialURL.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
  }
  state = {
    usernameInputHeight: {
      maxHeight: 10,
      height: 10
    },
    passwordInputHeight: {
      maxHeight: 10,
      height: 10
    },
    showLogo: true,
    showRememberMe: false,
    submitButtonColor: 'rgba(255,255,255,0.25)'
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }


  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then(this.getInitialURL);
    Keyboard.dismiss();
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  getInitialURL(url) {
    if (!url) {
      return;
    }
    this.handleOpenURL({ url });
  }

  keyboardDidShow() {
    this.setState({ shouldShowLogo: false });
  }

  keyboardDidHide() {
    this.setState({ shouldShowLogo: true });
  }

  handleOpenURL({ url }) {
    const [, userString] = url.match(/response=([^#]+)/);
    const response = JSON.parse(decodeURI(userString));
    this.props.loginBySocialNetwork(response);
  }

  openUrlBySocialNetwork(socialNetwork) {
    const Profile = new ProfileApi();
    const url = Profile.getLoginUrlBySocialNetwork(socialNetwork);
    Linking.openURL(url);
  }

  loginWithFacebook() {
    this.openUrlBySocialNetwork(ProfileApi.socialNetworks.facebook);
  }

  loginWithVkontakte() {
    this.openUrlBySocialNetwork(ProfileApi.socialNetworks.vkontakte);
  }


  handleUpdateCredential(credentialName) {
    return (value) => this.props.changeCredential(credentialName, value);
  }

  handleLogin() {
    const { state: { credentials } } = this.props;
    this.props.login(credentials);
  }

  render() {
    const { state: { credentials } } = this.props;
    const {
      containerStyle, formLabelStyle, formInputStyle, rememberMeStyle
    } = styles;
    const {
      usernameInputHeight, passwordInputHeight, showLogo, submitButtonColor, showRememberMe
    } = this.state;
    return (
      <Background type="one">
        <View style={[containerStyle, { height: showLogo ? '80%' : '90%' }]}>
          {!!showLogo && <Logo />}
          {!!showLogo &&
            <Text style={{
              color: 'white', fontSize: 12, fontFamily: 'sans-serif', fontWeight: '400'
            }}
            >ВНИМАНИЕ!
            </Text>
          }
          <View style={{ maxWidth: '80%' }}>
            <Row extraStyles={{ backgroundColor: 'rgba(9, 27, 117, 0.3)', alignItems: 'center', justifyContent: 'space-around' }}>
              <Text style={{
                paddingLeft: 10, paddingRight: 10, color: 'white', fontSize: 12, fontWeight: '400'
              }}
              >АВТОРИЗАЦИЯ С ПОМОЩЬЮ
              </Text>
              <Row>
                <Icon
                  name="facebook"
                  type="font-awesome"
                  reverse
                  color="#415fa8"
                  size={18}
                  onPress={this.loginWithFacebook}
                />
                <Icon
                  name="vk"
                  type="font-awesome"
                  reverse
                  color="#0077d9"
                  size={18}
                  onPress={this.loginWithVkontakte}
                />
              </Row>
            </Row>
            <View style={{ backgroundColor: 'white' }} >
              <Row extraStyles={{ justifyContent: 'space-between' }}>
                <FormLabel labelStyle={formLabelStyle}>ТЕЛЕФОН</FormLabel>
                <FormLabel labelStyle={[formLabelStyle, { color: '#bfbfbf' }]}>+7 000 000 00 00</FormLabel>
              </Row>
              <FormInput
                inputStyle={[formInputStyle, usernameInputHeight]}
                value={credentials.username}
                onFocus={() => this.setState(() => ({
                  usernameInputHeight: {}, submitButtonColor: '#00bfb1', showLogo: false, showRememberMe: true
                }))}
                onChangeText={this.handleUpdateCredential('username')}
                underlineColorAndroid="transparent"
                ref={(username) => { this.username = username; }}
              />
              <Divider style={{
                marginBottom: 10, marginTop: 3, backgroundColor: '#bfbfbf', width: '90%', alignSelf: 'center'
              }}
              />
              <Row extraStyles={{ justifyContent: 'space-between' }}>
                <FormLabel labelStyle={formLabelStyle}>ПАРОЛЬ</FormLabel>
                <FormLabel labelStyle={[formLabelStyle, { color: '#bfbfbf' }]}>ЗАБЫЛИ ПАРОЛЬ?</FormLabel>
              </Row>
              <FormInput
                inputStyle={[formInputStyle, passwordInputHeight]}
                secureTextEntry
                value={credentials.password}
                onFocus={() => this.setState(() => ({
                  passwordInputHeight: {}, submitButtonColor: '#00bfb1', showLogo: false, showRememberMe: true
                }))}
                onChangeText={this.handleUpdateCredential('password')}
                underlineColorAndroid="transparent"
                ref={(password) => { this.password = password; }}
              />
              <Divider style={{
                marginBottom: 10, marginTop: 3, backgroundColor: '#bfbfbf', width: '90%', alignSelf: 'center'
              }}
              />
              {!!showRememberMe && <Text style={rememberMeStyle}>ЗАПОМНИТЬ МЕНЯ</Text>}
            </View>
          </View>
          <Row extraStyles={{ maxHeight: 40, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text
              style={{
                flex: 1, textAlign: 'center', color: 'white', fontSize: 12, fontWeight: '400'
              }}
              onPress={() => Actions.Signup()}
            >РЕГИСТРАЦИЯ
            </Text>
            <Row extraStyles={{
              maxHeight: 40, flex: 1, justifyContent: 'center', alignItems: 'center'
            }}
            >
              <Text style={{
                textAlign: 'center', color: 'white', fontSize: 12, fontWeight: '400'
              }}
              >ОТПРАВИТЬ
              </Text>
              <Icon
                name="arrow-right"
                type="font-awesome"
                reverse
                color={submitButtonColor}
                size={18}
                onPress={this.handleLogin}
              />
            </Row>
          </Row>
        </View>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.login
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  changeCredential: (name, value) => dispatch(actions.changeCredential(name, value)),
  login: (credentials) => dispatch(userActions.login(credentials)),
  loginBySocialNetwork: (token) => dispatch(userActions.loginBySocialNetwork(token))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);
