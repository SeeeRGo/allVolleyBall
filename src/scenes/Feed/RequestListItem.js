import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import moment from 'moment';

import Row from '../../components/common/Row';
import { getInfoFromRequest, approveJoinGameRequest } from '../Game/GameScreen/actions';
import { Button } from 'react-native-elements';

class RequestListItem extends Component {
  componentWillMount() {
    this.props.getInfoFromRequest(this.props.request.id);
  }
  render() {
    const { profile, game } = this.props.requestInfo;
    return !!game && !!profile && (
      <View>
        <Text>{`${profile.firstName} ${profile.lastName} подал(а) заявку на участие`}</Text>
        <Text>{`в игре ${moment(game.date).format('DD/MM/YY HH:mm')}`}</Text>
        <Row>
          <Button
            title="ПРИНЯТЬ"
            onPress={() => this.props.approveJoinGameRequest(this.props.request.id)}
          />
        </Row>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  requestInfo: state.requestInfo
});

export default connect(mapStateToProps, { getInfoFromRequest, approveJoinGameRequest })(RequestListItem);
