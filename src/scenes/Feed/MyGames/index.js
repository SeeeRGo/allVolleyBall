import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import { fetchGamesFiltered, fetchGamesThroughRequests } from '../../Game/GameScreen/actions';
import MyGamesEmpty from './MyGamesEmpty';
import MyGamesContent from './MyGamesContent';
import MyGamesWrap from './MyGamesWrap';

class MyGames extends Component {
  componentWillMount() {
    const {
      userId, fetchGamesFiltered, fetchGamesThroughRequests, selectedButton
    } = this.props;
    if (selectedButton === 1) {
      fetchGamesFiltered({ creatorId: userId });
    } else {
      fetchGamesThroughRequests(userId);
    }
  }
  render() {
    const { myGames, selectedButton } = this.props;
    let filteredGames;
    if (selectedButton === 0) {
      filteredGames = myGames.filter((game) => (game ? moment().isBefore(moment(game.startTime).add(game.duration)) : false));
    } else if (selectedButton === 1) {
      filteredGames = myGames.filter((game) => !!game);
    } else {
      filteredGames = myGames.filter((game) => (game ? moment().isAfter(moment(game.startTime).add(game.duration)) : false));
    }
    console.log(this.props);
    return (
      <MyGamesWrap>
        {filteredGames && filteredGames.length > 0 ?
          <MyGamesContent games={filteredGames} /> :
          <MyGamesEmpty />}
      </MyGamesWrap>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.userProfile.id,
  myGames: state.game,
  selectedButton: state.selections.myGamesSubHeaderButtons
});

export default connect(mapStateToProps, { fetchGamesFiltered, fetchGamesThroughRequests })(MyGames);
