import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { View, Text, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class LeftColumn extends Component {
  static defaultProps = {
    gameImage: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs7X0GOmJmaQhq0f6HQcuogHiRq-YuNOFKhy24GxmA30uUPGS'
    },
    gameCreator: 'Андрейчук В.С.',
    createdAt: moment().format('DD/MM/YY HH:mm')
  }
  render() {
    const { gameImage, gameCreator, createdAt } = this.props;
    return (
      <View>
        <Image
          style={[styles.imageStyle, styles.containerStyle]}
          source={gameImage}
        />
        <Text
          style={styles.containerStyle}
          onPress={() => Actions.Profile()}
        >
          {gameCreator}
        </Text>
        <Text style={styles.containerStyle}>Создано {createdAt} в {createdAt}</Text>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="vk"
            type="font-awesome"
            size={28}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>{gameCreator.fbLink}</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="facebook"
            type="font-awesome"
            size={28}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>{gameCreator.vkLink}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.2
  },
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    maxWidth: SCREEN_WIDTH * 0.42
  },
  iconContainerStyle: {
    paddingRight: 10
  },
  rowContainerStyle: {
    flexDirection: 'row',
    padding: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const gameScreen = state.game.find((item) => item.gameId === ownProps.gameId);
  return {
    gameImage: gameScreen.gameImage,
    gameCreator: gameScreen.gameCreator,
    createdAt: gameScreen.createdAt
  };
};


export default connect(mapStateToProps)(LeftColumn);
