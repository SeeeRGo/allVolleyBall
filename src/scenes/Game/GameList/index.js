import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import GameListItem from '../GameListItem';
import GameSearchHeader from './GameSearchHeader';
import Background from '../../../components/common/Background';

class GameList extends Component {
  render() {
    return (
      <Background>
        <GameSearchHeader numGamesFound={this.props.games.length} />
        <List containerStyle={{ marginBottom: 20 }}>
          {
            this.props.games.map((game) => (
              <GameListItem
                key={game.gameId}
                {...game}
              />
            ))
          }
        </List>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.game
});

export default connect(mapStateToProps)(GameList);
