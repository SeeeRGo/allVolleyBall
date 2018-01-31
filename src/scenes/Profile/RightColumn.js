import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import styles from './styles';
import Row from '../../components/common/Row';


class RightColumn extends Component {
  render() {
    const { containerStyle, iconContainerStyle } = styles.rightColumnStyle;
    return (
      <View>
        <Text style={containerStyle}>МЕЛЬНИКОВ</Text>
        <Text style={containerStyle}>ВЯЧЕСЛАВ</Text>
        <Text style={containerStyle}>ВЛАДИМИРОВИЧ</Text>
        <Avatar
          small
          rounded
          title="М"
          component={View}
        />
        <Row>
          <Icon
            name="calendar"
            type="font-awesome"
            size={14}
            containerStyle={iconContainerStyle}
          />
          <Text>19/07/2018 в 11:00</Text>
        </Row>
        <Row>
          <Icon
            name="map-marker"
            type="font-awesome"
            size={14}
            containerStyle={iconContainerStyle}
          />
          <Text style={{ lineHeight: 20, maxWidth: '65%' }} numberOfLines={1}>Тольятти, Самарская область</Text>
        </Row>
        <Row>
          <Icon
            name="phone"
            type="font-awesome"
            size={14}
            containerStyle={iconContainerStyle}
          />
          <Text>+ 7 000 123 45 67</Text>
        </Row>
      </View>
    );
  }
}

export default RightColumn;
