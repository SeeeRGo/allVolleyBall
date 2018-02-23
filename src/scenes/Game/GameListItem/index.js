import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Rating, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Svg, { Rect } from 'react-native-svg';

import { getGameById, getGameFiles } from '../GameScreen/actions';
import Row from '../../../components/common/Row';
import SvgShadow from '../../../components/common/Svg/SvgShadow';
import ThumbnailView from './ThumbnailView';
import styles from './styles';

const sportTypes = [
  'ВОЛЕЙБОЛ КЛАССИЧЕСКИЙ',
  'ВОЛЕЙБОЛ ПЛЯЖНЫЙ'
];

const gameTypes = [
  'СВОБОДНАЯ ИГРА',
  'ТРЕНИРОВКА',
  'ИГРА ЧЕМПИОНАТА'

];

class GameListItem extends Component {
  static defaultProps = {
    gameImage: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs7X0GOmJmaQhq0f6HQcuogHiRq-YuNOFKhy24GxmA30uUPGS'
    },
    playersCounts: {
      max: 0,
      min: 0
    },
    showRequestStatus: false,
    deleteItem: false
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
      gameId, gameAddress, creator, gameTime, gameTypeId, cost, gameImage,
      kindOfSportsId, display, startTime, finishTime, playersCounts,
      maxPlayers, totalPlayers, showRequestStatus, requestStatus, deleteItem
    } = this.props;
    console.log(this.props);
    return (
      <View style={{ backgroundColor: 'transparent', marginBottom: 7 }}>
        <TouchableOpacity onPress={async () => {
          await this.props.getGameById(gameId);
          await this.props.getGameFiles(gameId);
          Actions.GameScreen({ gameId });
        }}
        >
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
                <Text style={borderedRedTextStyle}>{playersCounts.min}-{playersCounts.max} чел</Text>
                <Text style={borderedTealStyle}>{cost} р</Text>
              </Row>
              <Row extraStyles={rowHeight}>
                <Icon
                  size={12}
                  name="user"
                  type="font-awesome"
                  color="grey"
                  iconStyle={iconStyle}
                />
                <Text style={mainTextStyle}>{creator.firstName[0]}{'. '}{creator.lastName}
                </Text>
                <Text style={textStyle}>{sportTypes[kindOfSportsId]}{' '}</Text>
                <Text style={textStyle}>{gameTypes[gameTypeId]}{' '}</Text>
              </Row>
              <Row extraStyles={[rowHeight, { alignItems: 'center' }]}>
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
          <SvgShadow />
        </TouchableOpacity>
        <Row extraStyles={{
          justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', marginRight: 20
        }}
        >
          {showRequestStatus && <Text style={textStyle}>{requestStatus}</Text>}
          {deleteItem && <Text style={[textStyle, { color: '#d4ff32' }]}>х УДАЛИТЬ</Text>}
        </Row>
      </View>
    );
  }
}

export default connect(null, { getGameById, getGameFiles })(GameListItem);
