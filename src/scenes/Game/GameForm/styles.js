import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
  containerStyle: {
    width: SCREEN_WIDTH * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  formLabelStyle: {
    marginTop: 0,
    maxWidth: 150
  },
  formInputStyle: {
    fontSize: 14,
    minHeight: 20,
    paddingTop: 0,
    paddingBottom: 5,
    marginTop: 0
  },
  datePickerStyle: {
    width: 140,
    marginLeft: 15
  },
  avatarStyles: {
    labelStyle: {
      maxWidth: SCREEN_WIDTH * 0.2,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      fontSize: 12
    },
    sizeLarge: {
      width: SCREEN_WIDTH * 0.5,
      height: SCREEN_HEIGHT * 0.2
    },
    sizeMedium: {
      width: SCREEN_WIDTH * 0.2,
      height: SCREEN_WIDTH * 0.2
    },
    sizeSmall: {
      width: SCREEN_WIDTH * 0.15,
      height: SCREEN_WIDTH * 0.15
    }
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
  ratingStyle: {
    maxWidth: '20%',
    alignSelf: 'center',
    flex: 1
  },
  datePickerCustomStyle: {
    dateIcon: {
      position: 'absolute',
      width: 20,
      height: 20,
      left: 0,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
      marginLeft: 36,
      borderWidth: 0
    }
  }
};

export default styles;
