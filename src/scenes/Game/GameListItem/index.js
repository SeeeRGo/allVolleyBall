import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Rating, Icon } from 'react-native-elements';

import Row from '../../../components/common/Row';
import styles from './styles';

class GameListItem extends Component {
  render() {
    const {
      gameContainerStyle, leftColumnStyle, imageContainerStyle, rightColumnStyle, blueBgTextStyle,
      redBgTextStyle, borderedBlueTextStyle, borderedRedTextStyle, ratingStyle, borderedTealStyle,
      textStyle, mainTextStyle, iconStyle, blueText, rowHeight, spaceAroundRow
    } = styles;
    return (
      <Row extraStyles={gameContainerStyle}>
        <View style={leftColumnStyle}>
          <Image
            style={imageContainerStyle}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs7X0GOmJmaQhq0f6HQcuogHiRq-YuNOFKhy24GxmA30uUPGS' }}
          />
          <Rating
            imageSize={20}
            readonly
            startingValue={3}
            ratingCount={3}
            style={ratingStyle}
          />
        </View>
        <View style={rightColumnStyle}>
          <Row extraStyles={rowHeight}>
            <Text style={blueBgTextStyle}>19/07/18</Text>
            <Text style={redBgTextStyle}>11:00</Text>
            <Text style={borderedBlueTextStyle}>10:00-15:00</Text>
            <Text style={borderedRedTextStyle}>6-12 чел</Text>
            <Text style={borderedTealStyle}>0 р</Text>
          </Row>
          <Row extraStyles={rowHeight}>
            <Icon
              size={12}
              name="user"
              type="font-awesome"
              color="grey"
              iconStyle={iconStyle}
            />
            <Text style={mainTextStyle}>В. Андрейчук{' '}
            </Text>
            <Text style={textStyle}>волейбол, классический</Text>
          </Row>
          <Row extraStyles={rowHeight}>
            <Icon
              size={12}
              name="home"
              type="font-awesome"
              color="grey"
              iconStyle={iconStyle}
            />
            <Text style={textStyle}>Степана Разина 89{' '}
              <Text>Школа №67</Text>
            </Text>
          </Row>
          <Row extraStyles={spaceAroundRow}>
            <Text style={textStyle}>ЗАЯВКИ{' '}
              <Text style={blueText}>4</Text>
            </Text>
            <Text style={textStyle}>СВОБОДНЫХ МЕСТ{' '}
              <Text style={blueText}>8</Text>
            </Text>
            <Row>
              <Icon
                size={12}
                name="comment"
                type="font-awesome"
                color="grey"
                iconStyle={{ paddingRight: 5 }}
              />
              <Text style={textStyle}>10/{''}
                <Text style={blueText}>1</Text>
              </Text>
            </Row>
          </Row>
        </View>
      </Row>
    );
  }
}

export default GameListItem;
