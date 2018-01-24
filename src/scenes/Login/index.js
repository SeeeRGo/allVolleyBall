import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as userActions from '../../actions/user';

class LoginScene extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    changeCredential: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleUpdateCredential = this.handleUpdateCredential.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
          // onPress={this.handleButtonPress.bind(this)}
        />
        <Button
          title="Авторизация через"
          backgroundColor="blue"
          rightIcon={{ name: 'facebook', type: 'font-awesome' }}
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
  login: (credentials) => dispatch(userActions.login(credentials))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);
