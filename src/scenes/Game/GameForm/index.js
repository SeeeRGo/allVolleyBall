import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Keyboard } from 'react-native';
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
  static onEnter = () => {
    Keyboard.dismiss();
  }
  state = {
    isKeyboardOpened: null
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  keyboardDidShow = () => {
    this.setState({ isKeyboardOpened: true });
  }

  keyboardDidHide = () => {
    this.setState({ isKeyboardOpened: false });
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
  handleCreateGame = () => {
    const { createGame, formData, creatorId } = this.props;
    createGame({
      ...formData,
      creatorId
    });
    Actions.push('MyGames');
  }
  handleGameForm() {
    if (this.props.actionType === 'create') {
      return this.handleCreateGame();
    }
    return this.handleUpdateGame();
  }
  render() {
    console.log(this.props.gameId);
    const maxHeight = this.state.isKeyboardOpened ? SCREEN_HEIGHT * 0.35 : SCREEN_HEIGHT * 0.8;
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
              onPress={() => Actions.push('Signup')}
            />
          }
        />
        <ScrollView style={{ maxHeight }}>
          <PlayersAndTypeBlock />
          <RatingAndPriceBlock use="searchFilter" />
          <DatePickersBlock />
          <AddressAndInfoBlock />
        </ScrollView>
        <Button
          containerViewStyle={{ position: 'absolute', bottom: 0, width: '100%' }}
          title={this.props.actionType === 'create' ? 'СОЗДАТЬ ИГРУ' : 'РЕДАКТИРОВАТЬ ИГРУ'}
          buttonStyle={{ backgroundColor: '#00bfb1' }}
          onPress={this.handleCreateGame}
        />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  formData: state.gameForm,
  creatorId: state.user.userProfile.id
});

export default connect(mapStateToProps, { updateGame, createGame })(GameForm);
