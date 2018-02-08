import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import CustomHeader from '../../components/common/CustomHeader';
import FooterButtonGroup from './FooterButtonGroup';
import styles from './styles';

class EmptyFeed extends Component {
  render() {
    const { textStyle, buttonTextStyle, messageTextStyle } = styles;
    return (
      <Background>
        <CustomHeader />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[messageTextStyle, { marginBottom: 20 }]}>К сожалению,{'\n'}в вашей ленте пока ничего нет</Text>
          <Row>
            <Text style={messageTextStyle}>Для начала воспользуйтесь поиском{' '}</Text>
            <Icon
              name="search"
              type="font-awesome"
              color="white"
              size={12}
            />
            <Text style={messageTextStyle}>,</Text>
          </Row>
          <Text style={messageTextStyle}>чтобы найти подходящую игру, зал{'\n'}или создайте свои</Text>
        </View>
        <Row extraStyles={{
          justifyContent: 'space-around', flex: 1, position: 'absolute', bottom: 50
        }}
        >
          <Row extraStyles={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={textStyle}>СОЗДАТЬ ЗАЛ</Text>
            <Image
              style={{ width: 50, height: 50, margin: 10 }}
              source={require('../../assets/icons_new_gym.png')}
            />
          </Row>
          <Row extraStyles={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={textStyle}>СОЗДАТЬ ИГРУ</Text>
            <Image
              style={{ width: 50, height: 50, margin: 10 }}
              source={require('../../assets/icons_new_game.png')}
            />
          </Row>
        </Row>
        <FooterButtonGroup />
      </Background>
    );
  }
}

export default EmptyFeed;
