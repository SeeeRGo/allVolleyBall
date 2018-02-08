import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';

class PhoneConfirmed extends Component {
  render() {
    return (
      <Background>
        <View style={{ flex: 0.9, justifyContent: 'space-around', alignItems: 'center' }}>
          <Logo />
          <View >
            <Text style={[styles.textStyle]}>Спасибо!{'\n'}Номер подтвержден</Text>
            <Text style={[styles.textStyle]}>Заполните, пожалуйста{'\n'}недостающую информацию{'\n'}в настройках своего профиля</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon
              name="arrow-right"
              type="font-awesome"
              reverse
              color="rgba(1,1,1,0.5)"
              size={18}
            />
            <Text>СТАРТУЕМ!</Text>
          </View>
        </View>
      </Background>
    );
  }
}

const styles = {
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  }
};

export default PhoneConfirmed;
