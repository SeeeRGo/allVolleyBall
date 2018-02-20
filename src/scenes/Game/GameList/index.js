import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { fetchGames, getGameCreator, fetchGamesFiltered } from '../GameScreen/actions';
import GameListItem from '../GameListItem';
import GameSearchHeader from './GameSearchHeader';
import Background from '../../../components/common/Background';
import CustomHeader from '../../../components/common/CustomHeader';
import navBarStyles from '../../../components/common/CustomHeader/navBarStyles';
import { SCREEN_HEIGHT } from '../../../styles';
import ThumbnailView from '../GameListItem/ThumbnailView';

class GameList extends Component {
  componentWillMount() {
    this.props.fetchGames();
  }
  render() {
    const { games, getGameCreator, display } = this.props;
    console.log(this.props);
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
        <ScrollView style={{ maxHeight: SCREEN_HEIGHT, top: 70, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
          {
            games.map((game) => (
              <View>
                <GameListItem
                  key={game.id}
                  {...game}
                  gameId={game.id}
                  display={display}
                />
              </View>
            ))
          }
        </ScrollView>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.game,
  dispay: state.selections.gameListItemDisplay
});

export default connect(mapStateToProps, { fetchGames, getGameCreator, fetchGamesFiltered })(GameList);
