import React from 'react';
import { ImageBackground, Dimensions } from 'react-native';


const sourceOne = require('./gradient_bgr_1.jpg');
const sourceTwo = require('./gradient_bgr_2.jpg');

const bgStyle = {
  position: 'absolute',
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  backgroundColor: 'transparent'
};

export default (srcType) => (Component) => class Spinner extends React.Component {
  render() {
    const source = srcType === 'one' ? sourceOne : sourceTwo;
    return (
      <ImageBackground style={bgStyle} source={source}>
        <Component {...this.props} />
      </ImageBackground>
    );
  }
};
