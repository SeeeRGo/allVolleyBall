import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { View, Linking, Text, Keyboard, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Profile as ProfileApi } from '../../api/Profile';
import * as userActions from '../../actions/user';
import * as actions from './actions';
import Row from '../../components/common/Row';
import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import styles from './styles';
import Control from '../../components/FormControl';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

/**
 * @todo Рефакторинг
 * @todo Валидация и форматирование телефонов
 * @todo обработка плохого запроса
 */

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
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.loginWithVkontakte = this.loginWithVkontakte.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.handleOpenURL = this.handleOpenURL.bind(this);
    this.getInitialURL = this.getInitialURL.bind(this);
  }

  state = {
    focused: null,
    showLogo: true,
    showRememberMe: false,
    submitButtonColor: 'rgba(255,255,255,0.25)'
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentDidMount() {
    /**
     * @todo чекнуть вызывается ли метод при смене экрана
     */
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

  handleOpenURL({ url }) {
    console.log('login!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    const [, userString] = url.match(/response=([^#]+)/);
    console.log(userString, 'userString');
    const response = JSON.parse(decodeURI(userString));
    this.props.loginBySocialNetwork(response);
  }

  keyboardDidShow() {
    this.setState({ shouldShowLogo: false });
  }

  keyboardDidHide() {
    this.setState({ shouldShowLogo: true });
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

  handlePressRegisterButton() {
    Actions.reset('Signup');
  }

  render() {
    const { state: { credentials } } = this.props;
    const {
      showLogo, submitButtonColor
    } = this.state;
    return (
      <Background type="one">
        <View style={[styles.containerStyle, { height: showLogo ? '80%' : '90%' }]}>
          {!!showLogo && <Logo />}
          {!!showLogo &&
            <Text style={styles.logoText}>ВНИМАНИЕ!</Text>
          }
          <View style={{ maxWidth: '80%' }}>
            <View style={styles.headerLoginWindow}>
              <Text style={styles.headerLoginWindowTitle}>АВТОРИЗАЦИЯ С ПОМОЩЬЮ</Text>
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
            </View>
            <View style={{ backgroundColor: 'white' }} >
              <Control
                label="Телефон"
                labelInfo="+7 000 000 00 00"
                value={credentials.username}
                onChangeText={this.handleUpdateCredential('username')}
              />
              <Control
                label="Пароль"
                labelInfo="Забыли пароль?"
                value={credentials.password}
                onChangeText={this.handleUpdateCredential('password')}
                secureTextEntry
              />
              <Text style={styles.rememberMeStyle}>ЗАПОМНИТЬ МЕНЯ</Text>
            </View>
          </View>
          <Row extraStyles={{ maxHeight: 40, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text
              style={styles.registerButton}
              onPress={this.handlePressRegisterButton}
            >
              РЕГИСТРАЦИЯ
            </Text>
            <TouchableOpacity style={styles.sendButton} onPress={this.handleLogin}>
              <Text style={styles.sendButtonText}>ОТПРАВИТЬ</Text>
              <Icon
                name="arrow-right"
                type="font-awesome"
                reverse
                color={submitButtonColor}
                size={18}
              />
            </TouchableOpacity>
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
