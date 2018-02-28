import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

import styles from './styles';
import { changeSelection } from './actions';
import { Actions } from 'react-native-router-flux';

const component1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      style={{ width: 18, height: 15, marginBottom: 3 }}
      source={require('../../assets/icons_news.png')}
    />
    <Text style={styles.buttonTextStyle}>МОЯ ЛЕНТА</Text>
  </View>
);
const component2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      style={{ width: 24, height: 15, marginBottom: 3 }}
      source={require('../../assets/icons_games.png')}
    />
    <Text style={styles.buttonTextStyle}>МОИ ИГРЫ</Text>
  </View>
);
const component3 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      style={{ width: 19, height: 16, marginBottom: 3 }}
      source={require('../../assets/icons_gyms.png')}
    />
    <Text style={styles.buttonTextStyle}>МОИ ЗАЛЫ</Text>
  </View>
);

const scenes = [
  'Feed',
  'MyGames',
  'MyGyms'
];

class FooterButtonGroup extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.props.changeSelection('feedFooterButtons', selectedIndex);
    Actions.push(`${scenes[selectedIndex]}`);
  }
  render() {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }];
    const { selectedIndex } = this.props;
    const { containerStyle, selectedButtonStyle, innerBorderStyle } = styles.footerButtonGroupStyle;
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={containerStyle}
        selectedButtonStyle={selectedButtonStyle}
        buttonStyle={{ borderWidth: 0 }}
        containerBorderRadius={0}
        innerBorderStyle={innerBorderStyle}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  selectedIndex: state.selections.feedFooterButtons
});

export default connect(mapStateToProps, { changeSelection })(FooterButtonGroup);
