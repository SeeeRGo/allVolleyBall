import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

import { updateGameImage } from './actions';
import Row from '../../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const options = {
  title: 'Изменить фото игры',
  takePhotoButtonTitle: 'Сделать снимок',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class LeftColumn extends Component {
  static defaultProps = {
    gameImage: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs7X0GOmJmaQhq0f6HQcuogHiRq-YuNOFKhy24GxmA30uUPGS'
    },
    gameCreator: {
      name: 'Андрейчук В.С.',
      vkLink: 'vk.com/volley.nevolley',
      fbLink: 'facebook.com/volley.nevolley'
    },
    createdAt: {
      date: moment().format('DD/MM/YY'),
      time: moment().format('HH:mm')
    }
  }
  handleImagePress = () => {
    const { gameId, updateGameImage } = this.props;
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        ImagePicker.launchCamera(options, (res) => {
          console.log('Response = ', res);
        });
      } else {
        const source = `data:image/jpeg;base64,${response.data}`;

        updateGameImage(gameId, source);

        // updateGame(gameId, { gameImage: source });
      }
    });
  };
  render() {
    const { gameImage, gameCreator, createdAt } = this.props;
    const { textStyle, iconContainerStyle, imageStyle } = styles.leftColumnStyle;
    return (
      <View>
        <TouchableOpacity onPress={this.handleImagePress}>
          <Image
            style={imageStyle}
            source={{ uri: gameImage.uri }}
          />
        </TouchableOpacity>
        <View style={{ backgroundColor: '#091b75', height: SCREEN_HEIGHT * 0.4, paddingLeft: 10 }}>
          <Text
            style={textStyle}
            onPress={() => Actions.Profile()}
          >
            {gameCreator.name}
          </Text>
          <Text style={textStyle}>Создано {createdAt.date} в {createdAt.time}</Text>
          <Row>
            <Icon
              name="facebook"
              type="font-awesome"
              reverse
              color="#415fa8"
              size={16}
            />
            <Text style={textStyle}>{gameCreator.fbLink}</Text>
          </Row>
          <Row>
            <Icon
              name="vk"
              type="font-awesome"
              reverse
              color="#0077d9"
              size={16}
            />
            <Text style={textStyle}>{gameCreator.vkLink}</Text>
          </Row>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const gameScreen = state.game.find((item) => item.id === ownProps.gameId);
  return {
    gameImage: gameScreen.gameImage
    // gameCreator: gameScreen.gameCreator,
    // createdAt: gameScreen.createdAt
  };
};


export default connect(mapStateToProps, { updateGameImage })(LeftColumn);
