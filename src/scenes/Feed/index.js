import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRequestsToMyGames } from '../Game/GameScreen/actions';
import EmptyFeed from './EmptyFeed';
import RequestList from './RequestList';

class Feed extends Component {
  componentWillMount() {
    this.props.getRequestsToMyGames(this.props.userId);
  }
  render() {
    return (
      this.props.requestList && this.props.requestList.length > 0 ?
        <RequestList requestList={this.props.requestList} /> : <EmptyFeed />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    requestList: state.requestList,
    userId: state.user.userId
  }
}

export default connect(mapStateToProps, { getRequestsToMyGames })(Feed);
