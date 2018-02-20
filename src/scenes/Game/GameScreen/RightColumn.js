import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import moment from 'moment';

import Row from '../../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class RightColumn extends Component {
  static defaultProps = {
    totalPlayers: '0',
    gameType: 'классический',
    minPlayers: '7',
    maxPlayers: '7',
    price: 1000,
    gameTime: moment(),
    startTime: moment().format('HH:mm'),
    finishTime: moment().format('HH:mm'),
    gameAddress: moment().format('HH:mm')
  }
  render() {
    const {
      gameType, minPlayers, maxPlayers, price, totalPlayers,
      gameTime, startTime, finishTime, gameAddress, gameInfo
    } = this.props;
    const { textStyle, iconContainerStyle, ratingStyle } = styles.rightColumnStyle;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.6, marginLeft: 15 }}>
        <Text style={textStyle}>ВОЛЕЙБОЛ</Text>
        <Text style={textStyle}>Тип: {gameType}</Text>
        <Text style={textStyle}>Состав: {minPlayers}-{maxPlayers} игроков</Text>
        <Row>
          <Text style={textStyle}>Уровень{' '}</Text>
          <Rating
            imageSize={20}
            readonly
            startingValue={3}
            ratingCount={3}
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
            <Text style={textStyle}>{startTime} - {finishTime}</Text>
          </Row>
          <Row>
            <Icon
              name="map-marker"
              type="font-awesome"
              color="#00bfb1"
              size={12}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>{gameAddress}</Text>
          </Row>
          <Row>
            <Icon
              name="child"
              type="font-awesome"
              color="#00bfb1"
              size={12}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>Подали заявку {parseInt(totalPlayers, 10)} игрока</Text>
          </Row>
          <Row>
            <Icon
              name="tshirt-crew"
              type="material-community"
              color="#00bfb1"
              size={12}
              containerStyle={iconContainerStyle}
            />
            <Text style={textStyle}>Свободно {parseInt(maxPlayers, 10) - parseInt(totalPlayers, 10)} мест</Text>
          </Row>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const gameScreen = state.game.find((item) => item.id === ownProps.gameId);
  return {
    gameType: gameScreen.gameType,
    minPlayers: gameScreen.playersCounts.min,
    maxPlayers: gameScreen.playersCounts.max,
    price: gameScreen.cost,
    gameTime: gameScreen.date,
    startTime: gameScreen.arrivalTime,
    finishTime: gameScreen.arrivalTime,
    gameAddress: gameScreen.gameAddress,
    totalPlayers: gameScreen.totalPlayers
  };
};


export default connect(mapStateToProps)(RightColumn);
