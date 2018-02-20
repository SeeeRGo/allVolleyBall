import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGamesFiltered, fetchGamesThroughRequests } from '../../Game/GameScreen/actions';
import MyGamesEmpty from './MyGamesEmpty';
import MyGamesContent from './MyGamesContent';

class MyGames extends Component {
  componentWillMount() {
    const { userId, fetchGamesFiltered, fetchGamesThroughRequests } = this.props;
    // fetchGamesFiltered({ creatorId: userId });
    // fetchGamesThroughRequests(userId);
  }
  render() {
    return (
      this.props.myGames && this.props.myGames.length > 0 ?
        <MyGamesContent myGames={this.props.myGames} /> :
        <MyGamesEmpty />
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.userId,
  myGames: state.game
});

export default connect(mapStateToProps, { fetchGamesFiltered, fetchGamesThroughRequests })(MyGames);
