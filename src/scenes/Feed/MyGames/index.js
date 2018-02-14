import React, { Component } from 'react';

import MyGamesEmpty from './MyGamesEmpty';
import MyGamesContent from './MyGamesContent';

class MyGames extends Component {
  render() {
    return (
      this.props.myGames && this.props.myGames.length > 0 ?
        <MyGamesContent myGames={this.props.myGames} /> :
        <MyGamesEmpty />
    );
  }
}

export default MyGames;
