import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import { profileStylesScene } from './styles';

class GameScreen extends Component {
  render() {
    const { textBlockStyle } = profileStylesScene;
    const linesOfText = Math.floor(textBlockStyle.maxHeight / 20);
    return (
      <Background>
        <View style={{ width: '100%' }}>
          <Row>
            <LeftColumn />
            <RightColumn />
          </Row>
          <Text style={textBlockStyle} numberOfLines={linesOfText}>
            Друзья! Приглашаю вас 19 июля на очередную
            игру. Сбор как всегда у 67-й школы. Форма
            есть на всех, так что dont worry. Перед игрой
            получасовая разминка в спортзале школы. По
            окончанию игры планируется награждение команды-
            победителя. Приз пока держим в секрете. До встречи.
            Ваш В. Андрейчук.
            Друзья! Приглашаю вас 19 июля на очередную
            игру. Сбор как всегда у 67-й школы. Форма
            есть на всех, так что dont worry. Перед игрой
            получасовая разминка в спортзале школы. По
            окончанию игры планируется награждение команды-
            победителя. Приз пока держим в секрете. До встречи.
            Ваш В. Андрейчук.
          </Text>
        </View>
      </Background>
    );
  }
}

export default GameScreen;
