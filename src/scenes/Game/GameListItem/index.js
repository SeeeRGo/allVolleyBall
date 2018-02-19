import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import { Rating, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Row from '../../../components/common/Row';
import styles from './styles';

class GameListItem extends Component {
  static defaultProps = {
    gameImage: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs7X0GOmJmaQhq0f6HQcuogHiRq-YuNOFKhy24GxmA30uUPGS'
    }
  }
  componentDidMount() {
    Actions.refresh();
  }
  render() {
    const {
      gameContainerStyle, leftColumnStyle, imageContainerStyle, rightColumnStyle, blueBgTextStyle,
      redBgTextStyle, borderedBlueTextStyle, borderedRedTextStyle, ratingStyle, borderedTealStyle,
      textStyle, mainTextStyle, iconStyle, blueText, rowHeight, spaceAroundRow
    } = styles;
    const {
      gameId, gameAddress, gameCreator, gameTime, gameType, price, gameImage,
      startTime, finishTime, minPlayers, maxPlayers, totalPlayers
    } = this.props;
    console.log(this.props);
    return (
      <Row
        extraStyles={gameContainerStyle}
      >
        <View
          style={leftColumnStyle}
        >
          <Image
            style={imageContainerStyle}
            source={gameImage}
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
            <Text style={blueBgTextStyle}>{gameTime}</Text>
            <Text style={redBgTextStyle}>{moment(gameTime).format('HH:mm')}</Text>
            <Text style={borderedBlueTextStyle}>{startTime}-{finishTime}</Text>
            <Text style={borderedRedTextStyle}>{minPlayers}-{maxPlayers} чел</Text>
            <Text style={borderedTealStyle}>{price} р</Text>
          </Row>
          <Row extraStyles={rowHeight}>
            <Icon
              size={12}
              name="user"
              type="font-awesome"
              color="grey"
              iconStyle={iconStyle}
            />
            <Text style={mainTextStyle}>{gameCreator}{' '}
            </Text>
            <Text style={textStyle}>волейбол, {gameType}{' '}</Text>
            <Text
              style={textStyle}
              onPress={() => {
                console.log(gameId);
                Actions.GameScreen({ gameId });
              }}
            >
              ПОДРОБНЕЕ
            </Text>
          </Row>
          <Row extraStyles={rowHeight}>
            <Icon
              size={12}
              name="home"
              type="font-awesome"
              color="grey"
              iconStyle={iconStyle}
            />
            <Text style={textStyle}>{gameAddress}{' '}
              <Text>{gameAddress}</Text>
            </Text>
          </Row>
          <Row extraStyles={spaceAroundRow}>
            <Text style={textStyle}>ЗАЯВКИ{' '}
              <Text style={blueText}>{totalPlayers}</Text>
            </Text>
            <Text style={textStyle}>СВОБОДНЫХ МЕСТ{' '}
              <Text style={blueText}>{(maxPlayers - totalPlayers)}</Text>
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
