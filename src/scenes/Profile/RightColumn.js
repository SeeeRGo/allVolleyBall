import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import moment from 'moment';

import styles from './styles';
import Row from '../../components/common/Row';


class RightColumn extends Component {
  static defaultProps = {
    lastName: 'МЕЛЬНИКОВ',
    firstName: 'ВЯЧЕСЛАВ',
    fatherName: 'ВЛАДИМИРОВИЧ',
    birthDate: moment().format('YYYY-MM-DD'),
    phone: '+ 7 000 123 45 67',
    address: 'Тольятти, Самарская область'
  }
  static propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    fatherName: PropTypes.string,
    birthDate: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string
  }
  render() {
    const {
      firstName, lastName, fatherName, birthDate, phone, address
    } = this.props;
    const { containerStyle, iconContainerStyle } = styles.rightColumnStyle;
    return (
      <View>
        <Text style={containerStyle}>{lastName}</Text>
        <Text style={containerStyle}>{firstName}</Text>
        <Text style={containerStyle}>{fatherName}</Text>
        <Avatar
          small
          rounded
          title="М"
          component={View}
        />
        <Row>
          <Icon
            name="calendar"
            type="font-awesome"
            size={14}
            containerStyle={iconContainerStyle}
          />
          <Text>{birthDate}</Text>
        </Row>
        <Row>
          <Icon
            name="map-marker"
            type="font-awesome"
            size={14}
            containerStyle={iconContainerStyle}
          />
          <Text style={{ lineHeight: 20, maxWidth: '65%' }} numberOfLines={1}>{address}</Text>
        </Row>
        <Row>
          <Icon
            name="phone"
            type="font-awesome"
            size={14}
            containerStyle={iconContainerStyle}
          />
          <Text>{phone}</Text>
        </Row>
      </View>
    );
  }
}

export default RightColumn;
