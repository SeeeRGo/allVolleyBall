import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

import { uploadFile } from '../../../actions/files';
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
    gameImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs7X0GOmJmaQhq0f6HQcuogHiRq-YuNOFKhy24GxmA30uUPGS'
  }
  handleImagePress = () => {
    const { gameId, uploadFile } = this.props;
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

        uploadFile(source, 'game', gameId, true);
      }
    });
  };
  render() {
    const { gameImage, gameCreator, createdAt } = this.props;
    const { textStyle, iconContainerStyle, imageStyle } = styles.leftColumnStyle;
    console.log(gameImage);
    return (
      <View>
        <TouchableOpacity onPress={this.handleImagePress}>
          <Image
            style={imageStyle}
            source={{ uri: gameImage }}
          />
        </TouchableOpacity>
        <View style={{ backgroundColor: '#091b75', height: SCREEN_HEIGHT * 0.4, paddingLeft: 10 }}>
          <Text
            style={textStyle}
            onPress={() => Actions.Profile()}
          >
            {gameCreator.lastName}{` ${gameCreator.firstName[0]}. ${gameCreator.fatherName[0]}.`}
          </Text>
          <Text style={textStyle}>Создано {createdAt.date} в {createdAt.time}</Text>
          {!!gameCreator.username && <Text style={textStyle}>Моб. {gameCreator.username}</Text>}
          {!!gameCreator.fbLink &&
          <Row>
            <Icon
              name="facebook"
              type="font-awesome"
              reverse
              color="#415fa8"
              size={16}
            />
            <Text style={textStyle}>{gameCreator.fbLink}</Text>
          </Row>}
          {!!gameCreator.vkLink &&
          <Row>
            <Icon
              name="vk"
              type="font-awesome"
              reverse
              color="#0077d9"
              size={16}
            />
            <Text style={textStyle}>{gameCreator.vkLink}</Text>
          </Row>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const gameScreen = state.game.find((item) => item.id === ownProps.gameId);
  const gameImage = state.files.find((item) => state.gameForm.avatarId === item.id);
  return {
    gameImage: gameImage ? `http://134513.simplecloud.ru:3010${gameImage.link}` : 'http://archive.2030palette.org/addons/shared_addons/themes/palette_2030/img/swatch_editor/image_placeholder.jpg',
    gameCreator: state.gameInfo.creator,
    createdAt: {
      date: moment(state.gameInfo.date).format('DD/MM/YY'),
      time: moment(state.gameInfo.date).format('HH:mm')
    }
  };
};


export default connect(mapStateToProps, { uploadFile })(LeftColumn);
