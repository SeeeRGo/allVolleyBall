import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class RightColumn extends Component {
  render() {
    return (
      <View>
        <Text style={styles.containerStyle}>ВОЛЕЙБОЛ</Text>
        <Text style={styles.containerStyle}>Тип: Классический</Text>
        <Text style={styles.containerStyle}>Состав: 6-12 игроков</Text>
        <View style={styles.rowContainerStyle}>
          <Text>1000</Text>
          <Icon
            name="rub"
            type="font-awesome"
            size={12}
          />
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="calendar"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>19/07/2018 в 11:00</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="clock-o"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>11:00 - 15:00</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="map-marker"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text style={{ lineHeight: 20 }}>Степана Разина, 89 Школа №67</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="child"
            type="font-awesome"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>Подали заявку 4 игрока</Text>
        </View>
        <View style={styles.rowContainerStyle}>
          <Icon
            name="tshirt-crew"
            type="material-community"
            size={12}
            containerStyle={styles.iconContainerStyle}
          />
          <Text>Свободно 8 мест</Text>
        </View>
      </View>
    );
  }
}

const styles = {
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
    padding: 10,
    maxWidth: SCREEN_WIDTH * 0.42
  }
};

export default RightColumn;
