import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class LeftColumn extends Component {
  render() {
    return (
      <View>
        <Image
          style={[styles.imageStyle, styles.containerStyle]}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Volleyball_dig_02.jpg' }}
        />
        <Text style={styles.containerStyle}>Андрейчук В.С.</Text>
        <Text style={styles.containerStyle}>Создал 18/07/2018 в 18:00</Text>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="vk"
            type="font-awesome"
            size={28}
            containerStyle={styles.iconContainerStyle}
          />
          <Text >Создал 18/07/2018 в 18:00</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="facebook"
            type="font-awesome"
            size={28}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>Создал 18/07/2018 в 18:00</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.2
  },
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  iconContainerStyle: {
    paddingRight: 10
  },
  rowContainerStyle: {
    flexDirection: 'row',
    padding: 10
  }
};

export default LeftColumn;
