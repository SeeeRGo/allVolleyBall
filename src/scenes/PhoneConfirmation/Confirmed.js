import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import styles from './styles';

class PhoneConfirmed extends Component {
  render() {
    const { textStyle, buttonImageStyle } = styles;
    return (
      <Background type="one">
        <View style={{ flex: 0.9, justifyContent: 'space-around', alignItems: 'center' }}>
          <Logo />
          <View >
            <Text style={textStyle}>Спасибо!{'\n'}Номер подтвержден</Text>
            <Text style={textStyle}>Заполните, пожалуйста{'\n'}недостающую информацию{'\n'}в настройках своего профиля</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Actions.Feed()}>
              <Image
                style={buttonImageStyle}
                source={require('../../assets/icons_arr_next_active.png')}
              />
            </TouchableOpacity>
            <Text style={[textStyle, { fontSize: 10 }]}>СТАРТУЕМ!</Text>
          </View>
        </View>
      </Background>
    );
  }
}

export default PhoneConfirmed;
