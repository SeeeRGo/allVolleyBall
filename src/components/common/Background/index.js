import React from 'react';
import { ImageBackground } from 'react-native';

const sourceOne = require('./gradient_bgr_1.jpg');
const sourceTwo = require('./gradient_bgr_2.jpg');

const bgStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: null,
  height: null,
  backgroundColor: 'transparent'
};

export default (props) => {
  const source = props.type === 'one' ? sourceOne : sourceTwo;
  return (
    <ImageBackground style={bgStyle} source={source}>
      {props.children}
    </ImageBackground>
  );
};
