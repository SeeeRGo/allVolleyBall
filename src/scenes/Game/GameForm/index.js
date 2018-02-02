import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../../components/common/Background';
import GameFormFields from './GameFormFields';
import { updateGame, createGame } from '../GameScreen/actions';

class GameForm extends Component {
  static onEnter = (params) => {
    console.log('params', params);
  }
  static onExit = (params) => {
    console.log('exit params', params);
  }
  handleUpdateGame() {
    const {
      gameType, minPlayers, maxPlayers, price, gameTime, gameId,
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
    updateGame(gameId, updates);
    Actions.GameList();
  }
  handleCreateGame() {
    const {
      gameType, minPlayers, maxPlayers, price, gameTime,
      startTime, finishTime, gameAddress, gameInfo, createGame
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
    createGame(updates);
    Actions.GameList();
  }
  render() {
    console.log(this.props.gameId);
    return (
      <Background>
        <GameFormFields />
        <Button
          containerViewStyle={{ position: 'absolute', bottom: 60, width: '100%' }}
          title="РЕДАКТИРОВАТЬ ИГРУ"
          onPress={this.handleUpdateGame.bind(this)}
        />
        <Button
          containerViewStyle={{ position: 'absolute', bottom: 0, width: '100%' }}
          title="СОЗДАТЬ ИГРУ"
          onPress={this.handleCreateGame.bind(this)}
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

export default connect(mapStateToProps, { updateGame, createGame })(GameForm);
