import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar, FormLabel, Icon } from 'react-native-elements';
import Row from '../../components/common/Row';
import styles from './styles';


class Avatars extends Component {
  render() {
    const {
      labelStyle, sizeLarge, sizeMedium, sizeSmall
    } = styles.avatarStyles;
    return (
      <Row extraStyles={{ alignItems: 'flex-end' }}>
        <Avatar
          width={sizeLarge.width}
          height={sizeLarge.height}
          title="CR"
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ marginRight: 15 }}
        />
        <View>
          <Row>
            <Icon name="close" type="font-awesome" />
            <FormLabel labelStyle={labelStyle}>УДАЛИТЬ ФОТО</FormLabel>
          </Row>
          <FormLabel labelStyle={labelStyle}>АВАТАРЫ ДЛЯ ЧАТА И СПИСКОВ</FormLabel>
          <Avatar
            width={sizeMedium.width}
            height={sizeMedium.height}
            title="CR"
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={{ marginRight: 15 }}
          />
        </View>
        <Avatar
          width={sizeSmall.width}
          height={sizeSmall.height}
          rounded
          title="CR"
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ marginRight: 15 }}
        />
      </Row>
    );
  }
}

export default Avatars;
