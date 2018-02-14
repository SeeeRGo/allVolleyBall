import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export default {
  textStyle: {
    maxWidth: SCREEN_WIDTH * 0.4,
    color: 'white',
    fontSize: 12
  }
};
