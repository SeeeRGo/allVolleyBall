import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Row from '../Row';
import { SCREEN_WIDTH } from '../../../styles';

// TODO Refactoring & dynamic props

const BackButton = () => (
  <Icon
    name="angle-left"
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
    leftText: '',
    extraStyles: {}
  }
  render() {
    const {
      title, rightIcon, leftIcon, leftText, showBackButton, extraStyles
    } = this.props;
    return (
<<<<<<< HEAD
      <View style={[{
        height: 30, position: 'absolute', top: 0, left: 0, justifyContent: 'space-between', alignItems: 'center'
      }]}
=======
      <View style={{
        height: 30, position: 'absolute', top: 0, left: 0, justifyContent: 'space-between', alignItems: 'flex-end'
      }}
>>>>>>> 73a5399ae6abb13ef21dad368f37f3d6a93a5a52
      >
        <Row extraStyles={{
          width: SCREEN_WIDTH, justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, left: 0
        }}
        >
          <Row extraStyles={{
            width: '25%', position: 'absolute', top: 0, left: 0, paddingLeft: 5, paddingRight: 5
          }}
          >
            {showBackButton && <BackButton />}
            {!!leftIcon && leftIcon}
            {!!leftText && <Text style={{ color: 'white', textAlign: 'center', paddingTop: 5, fontSize: 12 }}>{leftText}</Text>}
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
