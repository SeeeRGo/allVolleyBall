import React, { Component } from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

class CloseIcon extends Component {
  render() {
    return (
      <Svg width="16" height="16">
        <Rect
          x="0"
          y="0"
          width="16"
          height="16"
          fill="rgba(0,0,0,0.4)"
        />
        <Line
          x1="3"
          y1="3"
          x2="13"
          y2="13"
          stroke="white"
          strokeWidth="1"
        />
        <Line
          x1="13"
          y1="3"
          x2="3"
          y2="13"
          stroke="white"
          strokeWidth="1"
        />
      </Svg>
    );
  }
}

export default CloseIcon;
