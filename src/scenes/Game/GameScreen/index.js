import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Background from '../../../components/common/Background';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class GameScreen extends Component {
  render() {
    return (
      <Background>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <LeftColumn />
            <RightColumn />
          </View>
          <View style={[styles.textBlockStyle, { flexDirection: 'row' }]}>
            <Text style={{ maxWidth: SCREEN_WIDTH * 0.7 }}>
            Друзья! Приглашаю вас 19 июля на очередную
            игру. Сбор как всегда у 67-й школы. Форма
            есть на всех, так что don't worry. Перед игрой
            получасовая разминка в спортзале школы. По
            окончанию игры планируется награждение команды-
            победителя. Приз пока держим в секрете. До встречи.
            Ваш В. Андрейчук.
            </Text>
            <Icon
              name="commenting"
              type="font-awesome"
              containerStyle={{ alignSelf: 'flex-end' }}
            />
          </View>
          <Button title="Отправить заявку" containerViewStyle={styles.buttonStyle} />
        </View>
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
    position: 'relative',
    bottom: -5
  }
};

export default GameScreen;
