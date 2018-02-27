import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import _ from 'lodash';

import GameListItem from '../../Game/GameListItem';

class MyGamesContent extends Component {
  static defaultProps = {
    games: []
  }
  getRequestStatus = (requests) => {
    const result = _.find(requests, { profileId: this.props.userId });
    switch (result.status) {
    case 'request':
      return 'ОЖИДАЕТ ОДОБРЕНИЯ';
    case 'approved':
      return 'ЗАЯВКА ОДОБРЕНА';
    case 'rejected':
      return 'ЗАЯВКА ОТКЛОНЕНА';
    case 'canceled':
      return 'БРОНЬ ОТМЕНЕНА';
    default:
      return '';
    }
  }
  render() {
    return (
      <ScrollView style={{
        top: 110, bottom: 45, marginLeft: 10, marginRight: 10
      }}
      >
        {
          this.props.games.map((game) => (
            <GameListItem
              key={game.id}
              {...game}
              gameId={game.id}
              showRequestStatus={this.props.selectedButton === 0}
              requestStatus={this.getRequestStatus(game.joinRequests)}
            />
          ))
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.userId,
  selectedButton: state.selections.myGamesSubHeaderButtons
});

export default connect(mapStateToProps)(MyGamesContent);
