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
    console.log(gameCreator);
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
            {gameCreator.lastName}{` ${gameCreator.firstName[0]}. ${gameCreator.fatherName[0]}.`}
          </Text>
          <Text style={textStyle}>Создано {createdAt.date} в {createdAt.time}</Text>
          {!!gameCreator.username && <Text style={textStyle}>Моб. {gameCreator.username}</Text>}
          {!!gameCreator.fbLink && <Row>
            <Icon
              name="facebook"
              type="font-awesome"
              reverse
              color="#415fa8"
              size={16}
            />
            <Text style={textStyle}>{gameCreator.fbLink}</Text>
                                   </Row>}
          {!!gameCreator.vkLink && <Row>
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
  return {
    gameImage: state.gameForm.gameImage,
    gameCreator: state.gameForm.creator,
    createdAt: {
      date: moment(state.gameForm.date).format('DD/MM/YY'),
      time: moment(state.gameForm.date).format('HH:mm')
    }
  };
};


export default connect(mapStateToProps, { updateGameImage })(LeftColumn);
