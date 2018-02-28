import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default {
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#00bfb1',
    borderRadius: 100
  },
  buttonIconStyle: {
    color: 'white',
    fontSize: 25
  },
  logoContainerStyle: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.5
  },
  textStyle: {
    color: 'white',
    fontSize: 12,
    marginTop: 15,
    textAlign: 'center'
  }
};
