import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default {
  containerStyle: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  formLabelStyle: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: SCREEN_WIDTH * 0.75,
    fontSize: 12,
    color: 'white'
  },
  formInputStyle: {
    fontSize: 14,
    minHeight: 20,
    paddingTop: 0,
    paddingBottom: 5,
    marginTop: 0
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  textStyle: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center'
  }
};
