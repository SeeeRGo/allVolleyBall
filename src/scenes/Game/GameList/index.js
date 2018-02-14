import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import { fetchGames } from '../GameScreen/actions';
import GameListItem from '../GameListItem';
import GameSearchHeader from './GameSearchHeader';
import Background from '../../../components/common/Background';
import CustomHeader from '../../../components/common/CustomHeader';
import navBarStyles from '../../../components/common/CustomHeader/navBarStyles';
import { SCREEN_HEIGHT } from '../../../styles';

class GameList extends Component {
  componentWillMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <Background>
        <CustomHeader
          title="Поиск игр"
          showBackButton
          rightIcon={
            <Icon
              name="search"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('Search')}
            />
          }
        />
        <GameSearchHeader numGamesFound={this.props.games.length} />
        <ScrollView style={{ maxHeight: SCREEN_HEIGHT, top: 50 }}>
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
        </ScrollView>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.game
});

export default connect(mapStateToProps, { fetchGames })(GameList);
