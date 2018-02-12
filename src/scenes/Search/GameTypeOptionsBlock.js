import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

import styles from './styles';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const component1 = () => (
  <View style={{
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }}
  >
    <Image
      style={{ width: 24, height: 24, marginBottom: 5 }}
      source={require('../../assets/ball.png')}
    />
    <Text style={styles.buttonTextStyle}>ВОЛЕЙБОЛ КЛАССИЧЕСКИЙ</Text>
  </View>
);
const component2 = () => (
  <View style={{
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }}
  >
    <Image
      style={{ width: 24, height: 24, marginBottom: 5 }}
      source={require('../../assets/sport.png')}
    />
    <Text style={styles.buttonTextStyle}>ВОЛЕЙБОЛ ПЛЯЖНЫЙ</Text>
  </View>
);
const component3 = () => (
  <View style={{
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }}
  >
    <Image
      style={{ width: 19, height: 16, marginBottom: 3 }}
      source={require('../../assets/icons_gyms.png')}
    />
    <Text style={styles.buttonTextStyle}>МОИ ЗАЛЫ</Text>
  </View>
);

class GameTypeOptionsBlock extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  render() {
    const buttons = [{ element: component1 }, { element: component2 }];
    const { selectedIndex } = this.state;
    const {
      containerStyle, selectedButtonStyle, innerBorderStyle
    } = styles.gameTypeOptionsStyle;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.15 }}>
        <Text style={styles.buttonTextStyle}>ТИП ИГРЫ</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={containerStyle}
          selectedButtonStyle={selectedButtonStyle}
          buttonStyle={{ borderWidth: 0 }}
          containerBorderRadius="0"
          innerBorderStyle={innerBorderStyle}
          component={TouchableNativeFeedback}
        />
      </View>
    );
  }
}

export default GameTypeOptionsBlock;
