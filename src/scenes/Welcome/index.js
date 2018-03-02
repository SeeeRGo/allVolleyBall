import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import { loginBySocialNetwork } from '../../actions/user';
import { addSocialNetwork } from '../Signup/actions';
import styles from './styles';
import ProfileApi from '../../api/Profile';

class Welcome extends Component {
  static onEnter = async () => {
    ProfileApi.logout();
    const token = await AsyncStorage.getItem('tokenId');
    console.log(token);
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('tokenId');

    // For demonstration
  }
  static onExit = async () => {
    ProfileApi.logout();
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('tokenId');
    // For demonstration
  }
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
