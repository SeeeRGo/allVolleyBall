import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { FormInput, Icon } from 'react-native-elements';
import axios from 'axios';

import { updateGameImage, updateReview, submitReview } from './actions';
import Row from '../../../components/common/Row';
import { SCREEN_WIDTH } from '../../../styles';

const options = {
  title: 'Select Avatar',
  takePhotoButtonTitle: 'Сделать снимок',
  customButtons: [
    { name: 'fb', title: 'Choose Photo from Facebook' }
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class GalleryAndCommentsBlock extends Component {
  state = {
    selectedImage: null
  }
  handleAddImage = () => {
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
      }
    });
  };
  render() {
    const {
      files, review, updateReview, submitReview, gameId, userId
    } = this.props;
    return (
      <View>
        <Row extraStyles={{ justifyContent: 'space-between', left: SCREEN_WIDTH * 0.5, width: '50%' }}>
          <Text style={{ fontSize: 12, color: 'white' }}>ФОТОГАЛЕРЕЯ</Text>
          <Text
            style={{ fontSize: 12, color: '#d4ff32' }}
            onPress={this.handleAddImage}
          >
            + ДОБАВИТЬ ФОТО
          </Text>
        </Row>
        <Image
          style={{ width: SCREEN_WIDTH - 10, height: SCREEN_WIDTH - 10, margin: 5 }}
          source={{ uri: this.state.selectedImage }}
        />
        <ScrollView horizontal>
          {files.map((file) => (
            <TouchableOpacity
              onPress={() => this.setState({ selectedImage: `http://134513.simplecloud.ru:3010${file.link}` })}
            >
              <Image
                key={file.name}
                style={{ width: 50, height: 50, margin: 5 }}
                source={{ uri: `http://134513.simplecloud.ru:3010${file.link}` }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Row extraStyles={{ justifyContent: 'space-between', left: SCREEN_WIDTH * 0.5, width: '50%' }}>
          <Text style={{ fontSize: 12, color: 'white' }}>ОТЗЫВЫ</Text>
          <Text
            style={{ fontSize: 12, color: '#d4ff32' }}
            onPress={this.handleAddReview}
          >
            + ДОБАВИТЬ ОТЗЫВ
          </Text>
        </Row>
        <View style={{ backgroundColor: 'white' }}>
          <Row extraStyles={{ justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 10, padding: 5 }}>ОЧИСТИТЬ</Text>
            <Icon
              name="send"
              type="font-awesome"
              color="#2f4e99"
              containerStyle={{ marginTop: 0, marginBottom: 0 }}
              onPress={() => submitReview(review, gameId, userId)}
            />
          </Row>
          <FormInput
            inputStyle={{ height: 120, backgroundColor: 'white', textAlignVertical: 'top' }}
            containerStyle={{ marginLeft: 0, marginRight: 0 }}
            multiline
            value={review}
            placeholder="Пишем текст отзыва"
            underlineColorAndroid="transparent"
            onChangeText={(value) => updateReview(value)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  review: state.review,
  userId: state.user.userProfile.id
});

export default connect(mapStateToProps, {
  updateGameImage, updateReview, submitReview
})(GalleryAndCommentsBlock);
