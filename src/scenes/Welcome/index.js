import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import styles from './styles';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

// TODO Передача токена экрану авторизации

class Welcome extends Component {
  render() {
    const {
      buttonContainerStyle, logoContainerStyle, textStyle, buttonImageStyle
    } = styles;
    return (
      <Background type="one">
        <View style={logoContainerStyle}>
          <Logo big />
        </View>
        <View style={buttonContainerStyle} >
          <TouchableOpacity onPress={() => Actions.Auth()}>
            <Image
              style={buttonImageStyle}
              source={require('../../assets/icons_arr_next_active.png')}
            />
          </TouchableOpacity>
          <Text style={textStyle}>НА СТАРТ!</Text>
        </View>
      </Background>
    );
  }
}

export default Welcome;
