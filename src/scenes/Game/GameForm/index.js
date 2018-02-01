import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import Background from '../../../components/common/Background';
import GameFormFields from './GameFormFields';
import { updateGame } from '../GameScreen/actions';
import { Actions } from 'react-native-router-flux';

class GameForm extends Component {
  handleUpdateGame() {
    const {
      gameType, minPlayers, maxPlayers, price, gameTime,
      startTime, finishTime, gameAddress, gameInfo, updateGame
    } = this.props;
    const updates = {
      gameType,
      minPlayers,
      maxPlayers,
      price,
      gameTime,
      startTime,
      finishTime,
      gameAddress,
      gameInfo
    };
    updateGame(updates);
    Actions.GameScreen();
  }
  render() {
    return (
      <Background>
        <GameFormFields />
        <Button
          containerViewStyle={{ position: 'absolute', bottom: 0, width: '100%' }}
          title="СОЗДАТЬ/РЕДАКТИРОВАТЬ ИГРУ"
          onPress={this.handleUpdateGame.bind(this)}
        />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  gameType: state.gameForm.gameType,
  minPlayers: state.gameForm.minPlayers,
  maxPlayers: state.gameForm.maxPlayers,
  price: state.gameForm.price,
  gameTime: state.gameForm.gameTime,
  startTime: state.gameForm.startTime,
  finishTime: state.gameForm.finishTime,
  gameAddress: state.gameForm.gameAddress,
  gameInfo: state.gameForm.gameInfo
});

export default connect(mapStateToProps, { updateGame })(GameForm);
