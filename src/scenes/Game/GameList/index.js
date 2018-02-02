import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import GameListItem from '../GameListItem';
import GameSearchHeader from './GameSearchHeader';

class GameList extends Component {
  render() {    
    return (
      <View>
        <GameSearchHeader />
        <List containerStyle={{marginBottom: 20}}>
          {
            this.props.games.map((game) => (
              <GameListItem
                key={game.id}
                {...game}
              />
            ))
          }
        </List>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.game
  }
}

export default connect(mapStateToProps)(GameList);