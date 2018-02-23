import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

class SvgStar extends Component {
  render() {
    return (
      <Svg width="20" height="20">
        <Path
          d="M10 1 L12 7 L19 7 L14 11 L16 18 L10 14 L4 18 L6 11 L1 7 L8 7 L10 1"
          stroke="white"
          fill="transparent"
          strokeWidth="1"
        />
      </Svg>
    );
  }
}

export default SvgStar;
