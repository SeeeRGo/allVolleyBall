import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import moment from 'moment';

import { getInfoFromRequest, updateJoinGameRequest } from '../Game/GameScreen/actions';
import Row from '../../components/common/Row';

class FeedListItem extends Component {
  state = {
    expanded: false
  }
  componentWillMount() {
    this.props.getInfoFromRequest(this.props.request.id);
  }
  getFeedItemMessage = () => {
    const { profile, game } = this.props.requestInfo;
    switch (this.props.request.status) {
    case 'request':
      return (
        <View>
          <Text>{`${profile.firstName} ${profile.lastName} подал(а) заявку на участие`}</Text>
          <Text>{`в игре ${moment(game.date).format('DD/MM/YY HH:mm')}`}</Text>
        </View>
      );
    case 'approved':
      return (
        <View>
          <Text>{`${profile.firstName} ${profile.lastName} присоединился(-ась) к игре`}</Text>
          <Text>{`к игре ${moment(game.date).format('DD/MM/YY HH:mm')}`}</Text>
        </View>
      );
    case 'rejected':
      return (
        <View>
          <Text>{`Заявка ${profile.firstName} ${profile.lastName} на участие`}</Text>
          <Text>{`в игре ${moment(game.date).format('DD/MM/YY HH:mm')} отклонена`}</Text>
        </View>
      );
    case 'cancelled':
      return (
        <View>
          <Text>{`${profile.firstName} ${profile.lastName} отменил(а) бронь участия`}</Text>
          <Text>{`в игре ${moment(game.date).format('DD/MM/YY HH:mm')}`}</Text>
        </View>
      );
    default:
      return (
        <View>
          <Text>Непредвиденное событие</Text>
        </View>
      );
    }
  }
  getOptionsRow = () => {
    const { user, requestInfo, request } = this.props;
    const { game, profile } = requestInfo;
    if (this.props.user.id !== game.creatorId) return false;
    if (request.status === 'request') {
      return (
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <Text
            onPress={() => updateJoinGameRequest(this.props.request.id, 'approved')}
          >ПРИНЯТЬ
          </Text>
          <Text
            onPress={() => updateJoinGameRequest(this.props.request.id, 'rejected')}
          >ОТКЛОНИТЬ
          </Text>
        </Row>
      );
    }
  }
  render() {
    const { profile, game } = this.props.requestInfo;
    console.log(profile);
    return !!game && !!profile && (
      <View style={{ maxWidth: '100%', justifyContent: 'center', backgroundColor: 'white' }}>
        <Row extraStyles={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <Row>
            <Avatar
              small
              rounded
            />
            {this.getFeedItemMessage()}
          </Row>
          <Icon
            name={this.state.expanded ? 'angle-up' : 'angle-down'}
            type="font-awesome"
            onPress={() => this.setState((prevState) => ({ expanded: !prevState.expanded }))}
          />
        </Row>
        {this.getOptionsRow()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  requestInfo: state.requestInfo,
  user: state.user.userProfile
});

export default connect(mapStateToProps, { getInfoFromRequest, updateJoinGameRequest })(FeedListItem);
