import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { sendJoinGameRequest } from './actions';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Background from '../../../components/common/Background';
import Row from '../../../components/common/Row';
import CustomHeader from '../../../components/common/CustomHeader';
import navBarStyles from '../../../components/common/CustomHeader/navBarStyles';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class GameScreen extends Component {
  static defaultProps = {
    gameInfo: 'Game Info here',
    gameCreator: {
      firstName: '',
      lastName: ''
    }
  }
  render() {
    console.log(this.props);
    const { gameInfo, gameId, gameCreator, userId, sendJoinGameRequest } = this.props;
    return (
      <Background>
        <CustomHeader
          title={`Создал ${gameCreator.firstName} ${gameCreator.lastName}`}
          leftIcon={
            <Icon
              name="phone"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.leftIconStyles}
              onPress={() => Actions.replace('Feed')}
            />
          }
          rightIcon={
            <Icon
              name="close"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('Search')}
            />
          }
        />
        <ScrollView style={{ width: '100%', top: 45 }}>
          <Row>
            <LeftColumn gameId={gameId} />
            <RightColumn gameId={gameId} />
          </Row>
          <View>
            <Text
              style={[styles.textBlockStyle]}
              onPress={() => Actions.GameForm({ gameId })}
            >
              {gameInfo}
            </Text>
          </View>
        </ScrollView>
        <Button
          title="Отправить заявку"
          containerViewStyle={styles.buttonStyle}
          buttonStyle={{ backgroundColor: '#00bfb1' }}
          onPress={() => sendJoinGameRequest(userId, gameId)}
        />
      </Background>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const gameScreen = state.game.find((item) => item.id === ownProps.gameId);
  return {
    gameInfo: gameScreen.gameInfo,
    gameCreator: gameScreen.creator,
    userId: state.user.userId
  };
};

export default connect(mapStateToProps, { sendJoinGameRequest })(GameScreen);
