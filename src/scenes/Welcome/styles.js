import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default {
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60
  },
  buttonImageStyle: {
    width: 50,
    height: 50
  },
  logoContainerStyle: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.5
  },
  textStyle: {
    color: 'white',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center'
  }
};
