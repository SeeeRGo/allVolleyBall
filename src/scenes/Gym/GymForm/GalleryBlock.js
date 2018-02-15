import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';

import { gymFormUpdate } from './actions';
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
  handleButtonPress = () => {
    const { photos, gymFormUpdate } = this.props;
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

        gymFormUpdate('photos', [...photos, source]);
      }
    });
  };
  render() {
    const { textStyle } = styles;
    const { photos, gymFormUpdate } = this.props;
    const slicedPhotos = _.chunk(photos, Math.floor(SCREEN_WIDTH / 130));
    return (
      <View style={{ marginBottom: 15, marginTop: 15 }}>
        <Text style={[textStyle, { marginBottom: 10, marginTop: 10 }]}>ФОТОГАЛЕРЕЯ{' '}
          <Text style={[textStyle, { color: '#d4ff32' }]}>{photos.length}</Text>
        </Text>
        {photos.length === 0 ? (
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
                        onPress={() => gymFormUpdate('photos', photos.filter((item) => item.uri !== photo.uri))}
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
          onPress={this.handleButtonPress}
        >
          + ДОБАВИТЬ ЕЩЕ ФОТО
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.gymForm.photos
});

export default connect(mapStateToProps, { gymFormUpdate })(GymForm);
