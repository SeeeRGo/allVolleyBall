import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { View, Linking } from 'react-native';
import { connect } from 'react-redux';
import ProfileApi from '../../api/Profile';
import * as userActions from '../../actions/user';
import * as actions from './actions';

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
      <View>
        <FormLabel>Телефон</FormLabel>
        <FormInput value={credentials.username} onChangeText={this.handleUpdateCredential('username')} />

        <FormLabel>Пароль</FormLabel>
        <FormInput value={credentials.password} onChangeText={this.handleUpdateCredential('password')} />

        <Button
          title="Отправить"
          onPress={this.handleLogin}
        />
        <Button
          title="Авторизация через"
          backgroundColor="teal"
          rightIcon={{ name: 'vk', type: 'font-awesome' }}
          onPress={this.loginWithVkontakte}
        />
        <Button
          title="Авторизация через"
          backgroundColor="blue"
          rightIcon={{ name: 'facebook', type: 'font-awesome' }}
          onPress={this.loginWithFacebook}
        />
      </View>
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
