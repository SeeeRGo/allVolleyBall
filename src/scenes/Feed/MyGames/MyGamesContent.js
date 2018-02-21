import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import GameListItem from '../../Game/GameListItem';

class MyGamesContent extends Component {
  static defaultProps = {
    games: []
  }
  render() {
    return (
      <ScrollView style={{
        top: 110, bottom: 45, marginLeft: 10, marginRight: 10
      }}
      >
        {
          this.props.games.map((game) => (
            <GameListItem
              key={game.id}
              {...game}
              gameId={game.id}
              showRequestStatus
              requestStatus="ОЖИДАЕТ ОДОБРЕНИЯ..."
              deleteItem
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default MyGamesContent;
