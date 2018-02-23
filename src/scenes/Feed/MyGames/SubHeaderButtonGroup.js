import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, TouchableNativeFeedback } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { changeSelection } from '../actions';
import CircledNumber from '../../../components/common/Svg/CircledNumber';
import Row from '../../../components/common/Row';
import styles from './styles';

const { elementTextStyle, elementContainerStyle } = styles.subHeaderButtonGroupStyle;

const component1 = () => (
  <View style={elementContainerStyle}>
    <Row extraStyles={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={elementTextStyle}>ПОДАВАЛ</Text>
      <CircledNumber />
    </Row>
  </View>
);
const component2 = () => (
  <View style={elementContainerStyle}>
    <Text style={elementTextStyle}>СОЗДАВАЛ</Text>
  </View>
);
const component3 = () => (
  <View style={elementContainerStyle}>
    <Text style={elementTextStyle}>ИГРАЛ</Text>
  </View>
);

const scenes = [
  'Feed',
  'MyGames',
  'MyGyms'
];

class SubHeaderButtonGroup extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.props.changeSelection('myGamesSubHeaderButtons', selectedIndex);
    Actions.refresh();
  }
  render() {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }];
    const { selectedIndex } = this.props;
    const { containerStyle, selectedButtonStyle, innerBorderStyle } = styles.subHeaderButtonGroupStyle;
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={containerStyle}
        selectedButtonStyle={selectedButtonStyle}
        buttonStyle={{
          borderBottomWidth: 1, borderBottomColor: 'white', marginLeft: 7, marginRight: 7
        }}
        containerBorderRadius={0}
        innerBorderStyle={innerBorderStyle}
        component={TouchableNativeFeedback}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  selectedIndex: state.selections.myGamesSubHeaderButtons
});

export default connect(mapStateToProps, { changeSelection })(SubHeaderButtonGroup);
