import React from 'react';
import { ImageBackground } from 'react-native';

const bgStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: null,
  height: null,
  backgroundColor: 'transparent'
};

export default (props) => (
  <ImageBackground style={bgStyle} source={require('./bg.png')}>
    {props.children}
  </ImageBackground>
);
