import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Svg, { Rect } from 'react-native-svg';

import { getGameFiles } from '../GameScreen/actions';
import { getFileById } from '../../../actions/files';
import { getGameById } from '../../../actions/games';
import Row from '../../../components/common/Row';
import SvgShadow from '../../../components/common/Svg/SvgShadow';
import MyRating from '../../../components/common/MyRating';
import ThumbnailView from './ThumbnailView';
import styles from './styles';

const placeholderImage = 'http://archive.2030palette.org/addons/shared_addons/themes/palette_2030/img/swatch_editor/image_placeholder.jpg';
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
    showRequestStatus: false,
    deleteItem: false
  }
  componentWillMount() {
    const { avatarId, getFileById } = this.props;
    getFileById(avatarId);
  }
  componentDidMount() {
    Actions.refresh();
  }
  render() {
    const {
      gameContainerStyle, leftColumnStyle, imageContainerStyle, rightColumnStyle, blueBgTextStyle,
      redBgTextStyle, borderedBlueTextStyle, borderedRedTextStyle, ratingStyle, borderedTealTextStyle,
      textStyle, iconStyle, blueText, rowHeight, spaceAroundRow, ratingStarSize
    } = styles;
    const {
      gameId, creator, gameInfo, display, getFileById, playerLevel, arrivalTime,
      cost, date, startTime, joinRequests, playersCounts, gameType, kindOfSport,
      gym, showRequestStatus, requestStatus, hasDelete, link, duration
    } = this.props;
    const totalPlayers = joinRequests ? joinRequests.filter((request) => request.status === 'approved').length : 0;
    const maxPlayers = playersCounts && playersCounts.max ? playersCounts.max : 0;
    const rating = playerLevel && playerLevel.length > 0 ? playerLevel[0].id : 1;
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
                source={{ uri: link }}
              />
              <View style={{
                backgroundColor: '#00bfb1', flex: 1, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <MyRating
                  readonly
                  showRating={false}
                  count={rating}
                  defaultRating={rating}
                  size={ratingStarSize}
                  style={ratingStyle}
                />
              </View>
            </View>
            <View style={rightColumnStyle}>
              <Row extraStyles={rowHeight}>
                <Text style={blueBgTextStyle}>{moment(startTime).format('DD/MM/YY')}</Text>
                <Text style={redBgTextStyle}>{moment(startTime).format('HH:mm')}</Text>
                <Text style={borderedBlueTextStyle}>{moment(arrivalTime).format('HH:mm')} - {moment(startTime).add(duration).format('HH:mm')}</Text>
                <Text style={borderedRedTextStyle}>{playersCounts && playersCounts.min}-{playersCounts && playersCounts.max} чел</Text>
                <Text style={borderedTealTextStyle}>{cost} р</Text>
              </Row>
              <Row extraStyles={[rowHeight, { alignItems: 'center' }]}>
                <Icon
                  size={12}
                  name="user"
                  type="font-awesome"
                  color="grey"
                  iconStyle={iconStyle}
                />
                <Text style={[textStyle, blueText]}>{creator && creator.firstName[0]}{'. '}{creator && creator.lastName}
                </Text>
                <Text style={textStyle}>{' '}{kindOfSport && kindOfSport.name}{' '}</Text>
              </Row>
              <Row extraStyles={[rowHeight, { alignItems: 'center' }]}>
                <Icon
                  size={12}
                  name="home"
                  type="font-awesome"
                  color="grey"
                  iconStyle={iconStyle}
                />
                {!!gym && <Text style={textStyle}>{`${gym.city}, ул. ${gym.street} ${gym.houseNumber}`}</Text>}
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
                  <Text style={textStyle}>0/{''}
                    <Text style={blueText}>0</Text>
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
          {hasDelete && <Text style={[textStyle, { color: '#d4ff32' }]}>х УДАЛИТЬ</Text>}
        </Row>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  link: state.fileInfo.link ? `http://10.0.3.2:3010${state.fileInfo.link}` : placeholderImage
});

export default connect(mapStateToProps, { getGameById, getGameFiles, getFileById })(GameListItem);
