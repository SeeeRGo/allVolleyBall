import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Avatar, FormLabel, Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

import { playerFormUpdate } from './actions';
import Row from '../../components/common/Row';
import styles from './styles';

const options = {
  title: 'Изменить фото игры',
  takePhotoButtonTitle: 'Сделать снимок',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class Avatars extends Component {
  handleImagePress = () => {
    const { gameId, playerFormUpdate } = this.props;
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

        playerFormUpdate('photo', { uri: source });

        // updateGame(gameId, { gameImage: source });
      }
    });
  };
  render() {
    const {
      labelStyle, sizeLarge, sizeMedium, sizeSmall
    } = styles.avatarStyles;
    console.log(this.props.photo);
    return (
      <Row extraStyles={{ alignItems: 'flex-end' }}>
        <Avatar
          width={sizeLarge.width}
          height={sizeLarge.height}
          source={this.props.photo.uri ? this.props.photo : this.props.avatar}
          onPress={this.handleImagePress}
          activeOpacity={0.7}
          containerStyle={{ marginRight: 15 }}
        />
        <View>
          <Row>
            <Icon name="close" type="font-awesome" size={15} color="white" />
            <FormLabel labelStyle={[labelStyle, { maxWidth: '100%', color: 'white', marginLeft: 5 }]}>{this.props.photo.uri || this.props.avatar.uri ? 'УДАЛИТЬ ФОТО' : 'ЗАГРУЗИТЬ ФОТО'}</FormLabel>
          </Row>
          <FormLabel labelStyle={[labelStyle, { maxWidth: '95%', color: 'white' }]}>АВАТАРЫ ДЛЯ ЧАТА И СПИСКОВ</FormLabel>
          <Row extraStyles={{ alignItems: 'flex-end' }}>
            <Avatar
              width={sizeMedium.width}
              height={sizeMedium.height}
              source={this.props.photo.uri ? this.props.photo : this.props.avatar}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={{ marginRight: 15 }}
            />
            <Avatar
              width={sizeSmall.width}
              height={sizeSmall.height}
              rounded
              source={this.props.photo.uri ? this.props.photo : this.props.avatar}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={{ marginRight: 15 }}
            />
          </Row>
        </View>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const avatar = state.files.find((file) => file.profileId === state.user.userId);
  return {
    avatar: {
      uri: avatar ? `http://10.0.3.2:3010${avatar.link}` : 'http://archive.2030palette.org/addons/shared_addons/themes/palette_2030/img/swatch_editor/image_placeholder.jpg'
    },
    photo: state.profileForm.photo
  };
};

export default connect(mapStateToProps, { playerFormUpdate })(Avatars);
