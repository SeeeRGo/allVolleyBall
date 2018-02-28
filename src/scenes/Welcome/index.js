import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import { loginBySocialNetwork } from '../../actions/user';
import { addSocialNetwork } from '../Signup/actions';
import styles from './styles';

class Welcome extends Component {
  componentWillMount() {
    Linking.removeAllListeners('url');
  }
  render() {
    return (
      <Background type="one">
        <View style={styles.logoContainerStyle}>
          <Logo big />
        </View>
        <View style={styles.buttonContainerStyle} >
          <TouchableOpacity onPress={() => Actions.reset('Auth')} style={styles.buttonStyle}>
            <Icon
              style={styles.buttonIconStyle}
              name="arrow-right"
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>НА СТАРТ!</Text>
        </View>
      </Background>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  addSocialNetwork: (response) => dispatch(addSocialNetwork(response)),
  loginBySocialNetwork: (response) => dispatch(loginBySocialNetwork(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
