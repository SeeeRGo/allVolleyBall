import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import Background from '../../../components/common/Background';
import GameFormFields from './GameFormFields';

class GameForm extends Component {
  render() {
    return (
      <Background>
        <GameFormFields />
        <Button containerViewStyle={{ position: 'absolute', bottom: 0, width: '100%' }} title="СОЗДАТЬ/РЕДАКТИРОВАТЬ ИГРУ" />
      </Background>
    );
  }
}

export default GameForm;
