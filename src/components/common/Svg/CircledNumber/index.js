import React, { Component } from 'react';
import Svg, { Circle, Text } from 'react-native-svg';

class CircledNumber extends Component {
  render() {
    return (
      <Svg width="16" height="16">
        <Circle
          cx="8"
          cy="8"
          r="8"
          fill="#b30005"
        />
        <Text
          x="8"
          y="13"
          fontSize="14"
          fill="white"
          textAnchor="middle"
        >
          1
        </Text>
      </Svg>
    );
  }
}

export default CircledNumber;
