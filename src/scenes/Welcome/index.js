import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import styles from './styles';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
// axios.defaults.adapter = httpAdapter;
// TODO Передача токена экрану авторизации

class Welcome extends Component {
  render() {
    const {
      buttonContainerStyle, logoContainerStyle, textStyle, buttonImageStyle
    } = styles;
    // axios.get('http://178.163.8.179:3010/api/Games')
    //   .then((res) => console.log(res.data))
    //   .catch((e) => console.log(e));
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
