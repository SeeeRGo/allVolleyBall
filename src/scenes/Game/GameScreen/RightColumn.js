import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';

import MyRating from '../../../components/common/MyRating';
import Row from '../../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

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
      gameType, minPlayers, maxPlayers, price, kindOfSport, approvedRequests,
      gameTime, startTime, gameAddress, duration, pendingRequests, playerLevel
    } = this.props;
    const { textStyle, iconContainerStyle, ratingStyle } = styles.rightColumnStyle;
    const rating = playerLevel && playerLevel.length > 0 ? playerLevel[0].id : 1;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.6, marginLeft: 15 }}>
        {kindOfSport && <Text style={textStyle}>{kindOfSport.split(' ')[1].toUpperCase()}</Text>}
        {kindOfSport && <Text style={textStyle}>Тип: {kindOfSport.split(' ')[0]}</Text>}
        <Text style={textStyle}>Состав: {minPlayers}-{maxPlayers} игроков</Text>
        <Row extraStyles={{ alignItems: 'center' }}>
          <Text style={textStyle}>Уровень{' '}</Text>
          <MyRating
            readonly
            showRating={false}
            count={rating}
            defaultRating={rating}
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
            <Text style={textStyle}>{moment(startTime).format('HH:mm')} - {moment(gameTime).add(duration).format('HH:mm')}</Text>
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
            <Text style={[textStyle, { maxWidth: '90%' }]}>Заявки - {approvedRequests}</Text>
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
  gameType: state.gameInfo.gameType ? state.gameInfo.gameType.name : undefined,
  minPlayers: state.gameInfo.playersCounts.min,
  maxPlayers: state.gameInfo.playersCounts.max,
  price: state.gameInfo.cost,
  gameTime: state.gameInfo.date,
  startTime: state.gameInfo.arrivalTime,
  finishTime: state.gameInfo.arrivalTime,
  gameAddress: {
    city: state.gameInfo.gym.city,
    street: state.gameInfo.gym.street,
    houseNumber: state.gameInfo.gym.houseNumber
  },
  playerLevel: state.gameInfo.playerLevel,
  kindOfSport: state.gameInfo.kindOfSport ? state.gameInfo.kindOfSport.name : undefined,
  duration: state.gameInfo.duration,
  pendingRequests: state.gameInfo.joinRequests.filter((req) => req.status === 'request').length,
  approvedRequests: state.gameInfo.joinRequests.filter((req) => req.status === 'approved').length
});


export default connect(mapStateToProps)(RightColumn);
