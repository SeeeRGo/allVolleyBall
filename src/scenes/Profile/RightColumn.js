import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import moment from 'moment';

import styles from './styles';
import Row from '../../components/common/Row';
import { SCREEN_HEIGHT } from '../Login/index';


class RightColumn extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render() {
    const { user } = this.props;
    console.log(user, 'user');
    const { textStyle, iconContainerStyle } = styles.rightColumnStyle;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.4, marginLeft: 15 }}>
        <Text style={[textStyle, { fontSize: 18, fontWeight: 'bold' }]}>{user.lastName.toUpperCase()}</Text>
        <Text style={[textStyle, { fontWeight: 'bold' }]}>{user.firstName.toUpperCase()} {user.fatherName.toUpperCase()}</Text>
        <Avatar
          small
          rounded
          title="М"
          component={View}
        />
        <View style={{ flex: 1, maxHeight: SCREEN_HEIGHT * 0.25, justifyContent: 'space-around' }}>
          <Row>
            <Icon
              name="calendar"
              type="font-awesome"
              color="#00bfb1"
              size={14}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{moment(user.birthday).format('D MMMM YYYY')}</Text>
          </Row>
          <Row>
            <Icon
              name="map-marker"
              type="font-awesome"
              color="#00bfb1"
              size={14}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{user.city}</Text>
          </Row>
          <Row>
            <Icon
              name="phone"
              type="font-awesome"
              color="#00bfb1"
              size={14}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{user.username}</Text>
          </Row>
        </View>
      </View>
    );
  }
}

export default RightColumn;
