import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Background from '../../../components/common/Background';
import Row from '../../../components/common/Row';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class GameScreen extends Component {
  static defaultProps = {
    gameInfo: 'Game Info here'
  }
  render() {
    const { gameInfo } = this.props;
    return (
      <Background>
        <View style={{ width: '100%' }}>
          <Row>
            <LeftColumn />
            <RightColumn />
          </Row>
          <Text style={styles.textBlockStyle}>
            {gameInfo}
          </Text>
        </View>
        <Button title="Отправить заявку" containerViewStyle={styles.buttonStyle} />
      </Background>
    );
  }
}

const styles = {
  imageStyle: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.2
  },
  textBlockStyle: {
    width: SCREEN_WIDTH * 0.85,
    maxWidth: SCREEN_WIDTH * 0.7,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 15
  },
  buttonStyle: {
    width: SCREEN_WIDTH,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    position: 'absolute',
    bottom: 0
  }
};

const mapStateToProps = (state) => ({
  gameInfo: state.game.gameInfo
});

export default connect(mapStateToProps)(GameScreen);
