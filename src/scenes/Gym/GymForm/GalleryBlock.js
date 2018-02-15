import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';
import { SCREEN_WIDTH } from '../../../components/common/Logo';
import Row from '../../../components/common/Row';
import styles from './styles';
import CloseIcon from '../../../components/common/Svg/CloseIcon';

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

class GymForm extends Component {
  state = {
    photos: []
  }
  handleButtonPress = () => {
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
        const source = { uri: response.uri };

        this.setState((prevState) => ({
          photos: [...prevState.photos, source]
        }));
      }
    });
  };
  render() {
    const { textStyle } = styles;
    const slicedPhotos = _.chunk(this.state.photos, Math.floor(SCREEN_WIDTH / 130));
    return (
      <View style={{ marginBottom: 15, marginTop: 15 }}>
        <Text style={[textStyle, { marginBottom: 10, marginTop: 10 }]}>ФОТОГАЛЕРЕЯ{' '}
          <Text style={[textStyle, { color: '#d4ff32' }]}>{this.state.photos.length}</Text>
        </Text>
        {this.state.photos.length === 0 ? (
          <Image
            style={{
              width: 120,
              height: 90,
              margin: 5
            }}
            source={{ uri: 'http://archive.2030palette.org/addons/shared_addons/themes/palette_2030/img/swatch_editor/image_placeholder.jpg' }}
          />) :
          (<ScrollView>
            {slicedPhotos.map((row) => (
              <Row>
                {row.map((photo) => (
                  (
                    <View>
                      <Image
                        key={photo.uri}
                        style={{
                          width: 120,
                          height: 90,
                          margin: 5
                        }}
                        source={{ uri: photo.uri }}
                      />
                      <TouchableOpacity
                        style={{ position: 'absolute', right: 7, top: 7 }}
                        onPress={() => this.setState((prevState) => ({
                          photos: prevState.photos.filter((item) => item.uri !== photo.uri)
                        }))}
                      >
                        <CloseIcon />
                      </TouchableOpacity>
                    </View>
                  )
                ))}
              </Row>
            ))}
           </ScrollView>)
        }
        <Text
          style={[textStyle, { color: '#d4ff32', marginTop: 15 }]}
          onPress={this.handleButtonPress.bind(this)}
        >
          + ДОБАВИТЬ ЕЩЕ ФОТО
        </Text>
      </View>
    );
  }
}

export default GymForm;
