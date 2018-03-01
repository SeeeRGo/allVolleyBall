import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import styles from './styles';
import ProfileApi from '../../api/Profile';

class Welcome extends Component {
  static onEnter = () => {
    ProfileApi.logout();
  }
  render() {
    return (
      <Background type="one">
        <View style={styles.logoContainerStyle}>
          <Logo big />
        </View>
        <View style={styles.buttonContainerStyle} >
          <TouchableOpacity onPress={() => Actions.replace('Auth')} style={styles.buttonStyle}>
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

export default Welcome;
