import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    city: 'Тольятти'
  }
  static propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    fatherName: PropTypes.string,
    birthDate: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string
  }
  render() {
    const {
      firstName, lastName, fatherName, birthDate, phone, city
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
          <Text style={{ lineHeight: 20, maxWidth: '65%' }} numberOfLines={1}>{city}</Text>
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

const mapStateToProps = (state) => ({
  lastName: state.profile.lastName,
  firstName: state.profile.firstName,
  fatherName: state.profile.fatherName,
  birthDate: state.profile.birthDate,
  phone: state.profile.phone,
  city: state.profile.city
});

export default connect(mapStateToProps)(RightColumn);
