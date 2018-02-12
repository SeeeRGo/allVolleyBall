import React, { Component } from 'react';
import Svg, { Rect } from 'react-native-svg';

import { SCREEN_WIDTH } from '../CustomHeader/navBarStyles';

class SvgShadow extends Component {
  render() {
    return (
      <Svg
        height="5"
        width={SCREEN_WIDTH}
      >
        <Rect
          x="0"
          y="0"
          height="1"
          fillOpacity="0.5"
          width={SCREEN_WIDTH}
          fill="rgb(0,0,0)"
        />
        <Rect
          x="0"
          y="1"
          height="1"
          fillOpacity="0.4"
          width={SCREEN_WIDTH}
          fill="rgb(0,0,0)"
        />
        <Rect
          x="0"
          y="2"
          height="1"
          fillOpacity="0.3"
          width={SCREEN_WIDTH}
          fill="rgb(0,0,0)"
        />
        <Rect
          x="0"
          y="3"
          height="1"
          fillOpacity="0.2"
          width={SCREEN_WIDTH}
          fill="rgb(0,0,0)"
        />
        <Rect
          x="0"
          y="4"
          height="1"
          fillOpacity="0.1"
          width={SCREEN_WIDTH}
          fill="rgb(0,0,0)"
        />
      </Svg>
    );
  }
}

export default SvgShadow;
