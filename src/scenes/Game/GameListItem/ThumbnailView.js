import React, { Component } from 'react';
import { View, Dimensions, Text, Image, ImageBackground } from 'react-native';
import { Rating, Icon } from 'react-native-elements';

import Row from '../../../helpers/Row';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class ThumbnailView extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <ImageBackground
          source={{ uri: 'https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/303/2017/11/21210212/08a0fa15514fe436-vb.jpg' }}
          style={styles.image}
        >
          <Row>
            <Text
              style={[styles.paragraph, { flex: 2 / 3, color: 'teal' }]}
            >
              300 Р
            </Text>
          </Row>
          <Row>
            <Text
              style={[styles.paragraph, { flex: 2, backgroundColor: 'navy', color: 'white' }]}
            >
              19/07/18
            </Text>
            <Text
              style={[styles.paragraph, { flex: 1, backgroundColor: 'red', color: 'white' }]}
            >
              11:00
            </Text>
          </Row>
        </ImageBackground>
      </View >
    );
  }
}
const styles = {
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 10
  },
  image: {
    height: SCREEN_HEIGHT * 0.15,
    width: SCREEN_WIDTH * 0.3,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  paragraph: {
    textAlign: 'center',
    backgroundColor: 'white',
    lineHeight: 22
  }
};

export default ThumbnailView;
