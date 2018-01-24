import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';

class LoginScene extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    changeCredential: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleUpdateCredential = this.handleUpdateCredential.bind(this);
  }

  handleUpdateCredential(credentialName) {
    return (value) => this.props.changeCredential(credentialName, value);
  }

  render() {
    const { state: { credentials } } = this.props;
    return (
      <View>
        <FormLabel>Телефон</FormLabel>
        <FormInput value={credentials.phone} onChangeText={this.handleUpdateCredential('phone')} />

        <FormLabel>Пароль</FormLabel>
        <FormInput value={credentials.password} onChangeText={this.handleUpdateCredential('password')} />

        <Button title="Отправить" />
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
          onPress={() => Actions.replace('Dashboard')}
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
  changeCredential: (name, value) => dispatch(actions.changeCredential(name, value))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);
