import React from 'react';
import { Image, Dimensions } from 'react-native';

const logoBig = require('../../../assets/logo_color_vert_white.png');
const logoSmall = require('../../../assets/logo_icon_white.png');

export const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
  logoBig: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 0.7 * 0.4573
  },
  logoSmall: {
    width: 67,
    height: 50
  }
};

export default (props) => {
  const source = props.big ? logoBig : logoSmall;
  const logoStyle = props.big ? styles.logoBig : styles.logoSmall;
  return (
    <Image
      style={logoStyle}
      source={source}
    />
  );
};

