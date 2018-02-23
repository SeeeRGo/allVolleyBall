import React, { Component } from 'react';
import Svg, { Circle, Text } from 'react-native-svg';

class GenderIcon extends Component {
  render() {
    return (
      <Svg width="30" height="30">
        <Circle
          cx="15"
          cy="15"
          r="15"
          fill={this.props.active ? '#091b75' : 'transparent'}
          stroke="#091b75"
        />
        <Text
          x="15"
          y="25"
          fontSize="24"
          fill={this.props.active ? 'white' : '#091b75'}
          textAnchor="middle"
        >
          {this.props.title}
        </Text>
      </Svg>
    );
  }
}

export default GenderIcon;
