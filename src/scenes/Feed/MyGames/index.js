import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGamesFiltered, fetchGamesThroughRequests } from '../../Game/GameScreen/actions';
import MyGamesEmpty from './MyGamesEmpty';
import MyGamesContent from './MyGamesContent';
import MyGamesWrap from './MyGamesWrap';

class MyGames extends Component {
  componentWillMount() {
    const { userId, fetchGamesFiltered, fetchGamesThroughRequests } = this.props;
    fetchGamesFiltered({ creatorId: userId });
    // fetchGamesThroughRequests(userId);
  }
  render() {
    const { myGames } = this.props;
    return (
      <MyGamesWrap>
        {myGames && myGames.length > 0 ?
          <MyGamesContent games={myGames} /> :
          <MyGamesEmpty />}
      </MyGamesWrap>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.userId,
  myGames: state.game
});

export default connect(mapStateToProps, { fetchGamesFiltered, fetchGamesThroughRequests })(MyGames);
