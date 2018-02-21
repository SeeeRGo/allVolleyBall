import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Row from '../../../components/common/Row';
import styles from './styles';

class MyGamesEmpty extends Component {
  render() {
    const { messageTextStyle } = styles;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={messageTextStyle}>К сожалению,{'\n'}</Text>
        <Text style={messageTextStyle}>вы не подали ни одной заявки{'\n'}</Text>
        <Row>
          <Text style={messageTextStyle}>Воспользуйтесь поиском{' '}</Text>
          <Icon
            name="search"
            type="font-awesome"
            color="white"
            size={12}
          />
        </Row>
        <Text style={messageTextStyle}>и найдите подходящую игру</Text>
      </View>
    );
  }
}

export default MyGamesEmpty;
