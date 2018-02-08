import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Row from '../Row';
import { SCREEN_WIDTH } from '../../../styles';

// TODO Refactoring & dynamic props

const BackButton = () => (
  <Icon
    name="navicon"
    type="font-awesome"
    color="white"
    containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
  />
);
const LeftComponent = () => (
  false
);


const IconRight = () => (
  <Icon
    name="search"
    type="font-awesome"
    color="white"
    containerStyle={{
      paddingLeft: 5, paddingRight: 5, position: 'absolute', width: '25%', left: SCREEN_WIDTH * 0.75, top: 0, alignItems: 'flex-end'
    }}
  />
);

class CustomHeader extends Component {
  static defaultProps = {
    rightIcon: null,
    leftIcon: null,
    showBackButton: false,
    leftText: ''
  }
  render() {
    const {
      title, rightIcon, leftIcon, leftText
    } = this.props;
    return (
      <View style={{
        height: 30, position: 'absolute', top: 0, left: 0, justifyContent: 'space-between', alignItems: 'center'
      }}
      >
        <Row extraStyles={{
          width: SCREEN_WIDTH, justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, left: 0
        }}
        >
          <Row extraStyles={{
            width: '25%', position: 'absolute', top: 0, left: 0
          }}
          >
            <BackButton />
            <LeftComponent />
          </Row>
          <Text style={{
            position: 'absolute', width: '50%', top: 0, left: SCREEN_WIDTH * 0.25, textAlign: 'center', color: 'white', paddingTop: 5, fontSize: 16
          }}
          >{this.props.title}
          </Text>
          {!!rightIcon && rightIcon}
        </Row>
      </View>
    );
  }
}

export default CustomHeader;
