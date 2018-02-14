import React, { Component } from 'react';

import MyGymsEmpty from './MyGymsEmpty';
import MyGymsContent from './MyGymsContent';

class MyGyms extends Component {
  render() {
    return (
      this.props.myGyms && this.props.myGyms.length > 0 ?
        <MyGymsContent myGames={this.props.myGyms} /> :
        <MyGymsEmpty />
    );
  }
}

export default MyGyms;
