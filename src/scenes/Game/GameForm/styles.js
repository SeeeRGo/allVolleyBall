import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
  containerStyle: {
    width: SCREEN_WIDTH,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  formLabelStyle: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: SCREEN_WIDTH * 0.45,
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
  datePickerStyle: {
    width: 140,
    marginLeft: 15,
    paddingBottom: 20,
    paddingTop: 10
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
    flex: 1
  },
  datePickerCustomStyle: {
    dateInput: {
      borderWidth: 0
    },
    dateText: {
      color: 'white',
      fontSize: 18,
      padding: 10
    },
    dateIcon: {
      height: 0,
      width: 0
    }
  }
};

export default styles;
