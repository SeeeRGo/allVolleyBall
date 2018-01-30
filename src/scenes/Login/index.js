import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, Icon } from 'react-native-elements';
import { View, Linking, Text } from 'react-native';
import { connect } from 'react-redux';
import ProfileApi from '../../api/Profile';
import * as userActions from '../../actions/user';
import * as actions from './actions';

import Row from '../../components/common/Row';
import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';


const styles = {
  logoStyle: {
    width: 50,
    height: 50
  },
  containerStyle: {
    flex: 0.75,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  formLabelStyle: {
    color: 'blue'
  },
  formInputStyle: {
    fontSize: 14
  }
};

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
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then(this.getInitialURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  getInitialURL(url) {
    if (!url) {
      return;
    }
    this.handleOpenURL({ url });
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
    return (
      <Background>
        <View style={styles.containerStyle}>
          <Logo />
          <Text>ВНИМАНИЕ!</Text>
          <View style={{ maxWidth: '80%' }}>
            <Row extraStyles={{ backgroundColor: 'mediumblue', alignItems: 'center' }}>
              <Text style={{ paddingLeft: 10, paddingRight: 10, color: 'white' }}>АВТОРИЗАЦИЯ С ПОМОЩЬЮ</Text>
              <Icon
                name="vk"
                type="font-awesome"
                reverse
                color="deepskyblue"
                size={18}
                onPress={this.loginWithVkontakte}
              />
              <Icon
                name="facebook"
                type="font-awesome"
                reverse
                color="midnightblue"
                size={18}
                onPress={this.loginWithFacebook}
              />
            </Row>
            <View style={{ backgroundColor: 'white' }}>
              <FormLabel labelStyle={[styles.formLabelStyle]}>ТЕЛЕФОН</FormLabel>
              <FormInput
                inputStyle={[styles.formInputStyle]}
                placeholder="+7 000 000 00 00"
                value={credentials.username}
                onChangeText={this.handleUpdateCredential('username')}
              />
              <Row extraStyles={{ justifyContent: 'space-between' }}>
                <FormLabel labelStyle={[styles.formLabelStyle]}>ПАРОЛЬ</FormLabel>
                <FormLabel>ЗАБЫЛИ ПАРОЛЬ?</FormLabel>
              </Row>
              <FormInput inputStyle={[styles.formInputStyle]} value={credentials.password} onChangeText={this.handleUpdateCredential('password')} />
            </View>
          </View>
          <Row extraStyles={{ maxHeight: 40, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ flex: 1, textAlign: 'center' }}>РЕГИСТРАЦИЯ</Text>
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
