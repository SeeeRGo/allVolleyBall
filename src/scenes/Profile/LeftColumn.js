import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { leftColumnStyle } from './styles';
import Row from '../../components/common/Row';

class LeftColumn extends Component {
  render() {
    const {
      imageStyle, containerStyle, iconContainerStyle, textStyle
    } = leftColumnStyle;
    return (
      <View>
        <Image
          style={[imageStyle, containerStyle]}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Volleyball_dig_02.jpg' }}
        />
        <Row>
          <Icon
            name="vk"
            type="font-awesome"
            size={24}
            containerStyle={iconContainerStyle}
          />
          <Text style={textStyle}>www.vk.com/melnik.mellow</Text>
        </Row>
        <Row>
          <Icon
            name="facebook"
            type="font-awesome"
            size={24}
            containerStyle={iconContainerStyle}
          />
          <Text style={textStyle}>www.facebook.com/melnik.mellow</Text>
        </Row>
      </View>
    );
  }
}

export default LeftColumn;
