import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { fetchGames } from '../GameScreen/actions';
import GameListItem from '../GameListItem';
import GameSearchHeader from './GameSearchHeader';
import Background from '../../../components/common/Background';

class GameList extends Component {
  componentWillMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <Background>
        <GameSearchHeader numGamesFound={this.props.games.length} />
        <List containerStyle={{ marginBottom: 20 }}>
          {
            this.props.games.map((game) => (
              <GameListItem
                key={game.id}
                {...game}
                gameId={game.id}
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

export default connect(mapStateToProps, { fetchGames })(GameList);
