import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import moment from 'moment';

import styles from './styles';
import Row from '../../components/common/Row';
import { SCREEN_HEIGHT } from '../Login/index';


class RightColumn extends Component {
  static defaultProps = {
    lastName: 'МЕЛЬНИКОВ',
    firstName: 'ВЯЧЕСЛАВ',
    fatherName: 'ВЛАДИМИРОВИЧ',
    birthDate: moment().format('D MMMM YYYY'),
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
    const { textStyle, iconContainerStyle } = styles.rightColumnStyle;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.4, marginLeft: 15 }}>
        <Text style={[textStyle, { fontSize: 18, fontWeight: 'bold' }]}>{lastName.toUpperCase()}</Text>
        <Text style={[textStyle, { fontWeight: 'bold' }]}>{firstName.toUpperCase()} {fatherName.toUpperCase()}</Text>
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
            <Text style={textStyle}>{moment(birthDate).format('D MMMM YYYY')}</Text>
          </Row>
          <Row>
            <Icon
              name="map-marker"
              type="font-awesome"
              color="#00bfb1"
              size={14}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{city}</Text>
          </Row>
          <Row>
            <Icon
              name="phone"
              type="font-awesome"
              color="#00bfb1"
              size={14}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{phone}</Text>
          </Row>
        </View>
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
