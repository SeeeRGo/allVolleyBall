import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { updateGame, createGame } from '../GameScreen/actions';
import PlayersAndTypeBlock from './PlayersAndTypeBlock';
import RatingAndPriceBlock from './RatingAndPriceBlock';
import DatePickersBlock from './DatePickersBlock';
import AddressAndInfoBlock from './AddressAndInfoBlock';
import Background from '../../../components/common/Background';
import CustomHeader from '../../../components/common/CustomHeader';
import navBarStyles, { SCREEN_HEIGHT } from '../../../components/common/CustomHeader/navBarStyles';

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
      startTime, finishTime, gameAddress, gameInfo
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
    this.props.updateGame(updates, gameId);
    Actions.GameList();
  }
  handleCreateGame() {
    const {
      gameType, minPlayers, maxPlayers, price, gameTime,
      startTime, finishTime, gameAddress, gameInfo
    } = this.props;
    const game = {
      kindOfSportsId: gameType,
      players: {
        min: minPlayers,
        max: maxPlayers,
        total: 0
      },
      cost: price,
      date: moment(gameTime).toISOString(),
      startTime: moment(gameTime).toISOString(),
      arrivalTime: moment(startTime).toISOString(),
      duration: {
        hours: moment(finishTime).diff(startTime),
        minutes: moment(finishTime).diff(startTime),
        seconds: moment(finishTime).diff(startTime)
      },
      gameAddress,
      gameInfo,
      paymentTerms: {},
      gymId: 'myPersonalGymId',
      creatorId: 'myProfileId'
    };
    this.props.createGame(game);
    Actions.GameList();
  }
  handleGameForm() {
    if (this.props.actionType === 'create') {
      return this.handleCreateGame();
    }
    return this.handleUpdateGame();
  }
  render() {
    console.log(this.props.gameId);
    return (
      <Background>
        <CustomHeader
          title="Новая игра"
          rightIcon={
            <Icon
              name="close"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('Signup')}
            />
          }
        />
        <View style={{ maxHeight: SCREEN_HEIGHT * 0.8 }}>
          <ScrollView >
            <PlayersAndTypeBlock />
            <RatingAndPriceBlock />
            <DatePickersBlock />
            <AddressAndInfoBlock />
          </ScrollView>
        </View>

        <Button
          containerViewStyle={{ position: 'absolute', bottom: 0, width: '100%' }}
          title={this.props.actionType === 'create' ? 'СОЗДАТЬ ИГРУ' : 'РЕДАКТИРОВАТЬ ИГРУ'}
          buttonStyle={{ backgroundColor: '#00bfb1' }}
          onPress={this.handleGameForm.bind(this)}
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
