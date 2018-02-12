import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class RightColumn extends Component {
  static defaultProps = {
    totalPlayers: '0'
  }
  render() {
    const {
      gameType, minPlayers, maxPlayers, price, totalPlayers,
      gameTime, startTime, finishTime, gameAddress, gameInfo
    } = this.props;
    return (
      <View>
        <Text style={styles.containerStyle}>ВОЛЕЙБОЛ</Text>
        <Text style={styles.containerStyle}>Тип: {gameType}</Text>
        <Text style={styles.containerStyle}>Состав: {minPlayers}-{maxPlayers} игроков</Text>
        <View style={styles.rowContainerStyle}>
          <Text>{price}</Text>
          <Icon
            name="rub"
            type="font-awesome"
            size={12}
          />
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="calendar"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>{gameTime} в {gameTime}</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="clock-o"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>{startTime} - {finishTime}</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="map-marker"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text style={{ lineHeight: 20 }}>{gameAddress}</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="child"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>Подали заявку {parseInt(totalPlayers, 10)} игрока</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="tshirt-crew"
            type="material-community"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>Свободно {parseInt(maxPlayers, 10) - parseInt(totalPlayers, 10)} мест</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  iconContainerStyle: {
    paddingRight: 10
  },
  rowContainerStyle: {
    flexDirection: 'row',
    padding: 10,
    maxWidth: SCREEN_WIDTH * 0.42
  }
};

const mapStateToProps = (state, ownProps) => {
  const gameScreen = state.game.find((item) => item.id === ownProps.gameId);
  return {
    gameType: gameScreen.gameType,
    minPlayers: gameScreen.minPlayers,
    maxPlayers: gameScreen.maxPlayers,
    price: gameScreen.price,
    gameTime: gameScreen.gameTime,
    startTime: gameScreen.startTime,
    finishTime: gameScreen.finishTime,
    gameAddress: gameScreen.gameAddress,
    totalPlayers: gameScreen.totalPlayers
  };
};


export default connect(mapStateToProps)(RightColumn);
