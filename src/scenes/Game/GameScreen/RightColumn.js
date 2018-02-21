import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';

import MyRating from '../../../components/common/MyRating';
import Row from '../../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const sportTypes = [
  'ВОЛЕЙБОЛ КЛАССИЧЕСКИЙ',
  'ВОЛЕЙБОЛ ПЛЯЖНЫЙ'
];

class RightColumn extends Component {
  // static defaultProps = {
  //   totalPlayers: '0',
  //   gameType: 'классический',
  //   minPlayers: '7',
  //   maxPlayers: '7',
  //   price: 1000,
  //   gameTime: moment(),
  //   startTime: moment().format('HH:mm'),
  //   finishTime: moment().format('HH:mm'),
  //   gameAddress: moment().format('HH:mm')
  // }
  render() {
    const {
      gameType, minPlayers, maxPlayers, price, totalPlayers, sportType, approvedRequests,
      gameTime, startTime, finishTime, gameAddress, gameInfo, duration, pendingRequests
    } = this.props;
    const { textStyle, iconContainerStyle, ratingStyle } = styles.rightColumnStyle;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.6, marginLeft: 15 }}>
        <Text style={textStyle}>{sportTypes[sportType].split(' ')[0]}</Text>
        <Text style={textStyle}>Тип: {sportTypes[sportType].split(' ')[1].toLowerCase()}</Text>
        <Text style={textStyle}>Состав: {minPlayers}-{maxPlayers} игроков</Text>
        <Row extraStyles={{ alignItems: 'center' }}>
          <Text style={textStyle}>Уровень{' '}</Text>
          <MyRating
            readonly
            showRating={false}
            count={3}
            defaultRating={3}
            size={20}
            style={ratingStyle}
          />
        </Row>
        <View style={{ flex: 1, justifyContent: 'space-around', marginBottom: 50 }}>
          <Row extraStyles={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#d4ff32', fontSize: 18 }}>{price}{' '}</Text>
            <Icon
              name="rub"
              type="font-awesome"
              color="#d4ff32"
              size={14}
            />
            <Text style={{ color: '#d4ff32', fontSize: 14 }}>{' | '}наличные</Text>
          </Row>
          <Row>
            <Text style={{ backgroundColor: '#091b75', color: 'white', padding: 3 }}>{moment(gameTime).format('DD/MM/YY')}
            </Text>
            <Text style={{ backgroundColor: '#b30005', color: 'white', padding: 3 }}>{moment(gameTime).format('HH:mm')}</Text>
          </Row>
          <Row>
            <Icon
              name="clock-o"
              type="font-awesome"
              color="#00bfb1"
              size={12}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{moment(startTime).format('HH:mm')} - {moment(startTime).add(duration.hours).format('HH:mm')}</Text>
          </Row>
          <Row>
            <Icon
              name="map-marker"
              type="font-awesome"
              color="#00bfb1"
              size={12}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{`${gameAddress.city}, ул. ${gameAddress.street} ${gameAddress.houseNumber}`}</Text>
          </Row>
          <Row>
            <Icon
              name="child"
              type="font-awesome"
              color="#00bfb1"
              size={12}
              containerStyle={iconContainerStyle}
            />
            <Text style={[textStyle, { maxWidth: '90%' }]}>Заявки{'\n'}На рассмотрении - {pendingRequests}{'\n'}Одобрено - {approvedRequests}</Text>
          </Row>
          <Row>
            <Icon
              name="tshirt-crew"
              type="material-community"
              color="#00bfb1"
              size={12}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>Свободных мест - {maxPlayers - approvedRequests}</Text>
          </Row>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  gameType: state.gameForm.gameType,
  minPlayers: state.gameForm.playersCounts.min,
  maxPlayers: state.gameForm.playersCounts.max,
  price: state.gameForm.cost,
  gameTime: state.gameForm.date,
  startTime: state.gameForm.arrivalTime,
  finishTime: state.gameForm.arrivalTime,
  gameAddress: {
    city: state.gameForm.gym.city,
    street: state.gameForm.gym.street,
    houseNumber: state.gameForm.gym.houseNumber
  },
  sportType: state.gameForm.kindOfSportsId,
  totalPlayers: state.gameForm.totalPlayers,
  duration: state.gameForm.duration,
  pendingRequests: state.gameForm.joinRequests.filter((req) => req.status === 'request').length,
  approvedRequests: state.gameForm.joinRequests.filter((req) => req.status === 'approved').length
});


export default connect(mapStateToProps)(RightColumn);
