import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export default {
  rightIconStyles: {
    paddingLeft: 5,
    paddingRight: 5,
    position: 'absolute',
    width: '25%',
    left: SCREEN_WIDTH * 0.75,
    top: 0,
    alignItems: 'flex-end'
  }
};
