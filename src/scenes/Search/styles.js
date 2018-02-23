import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
  formLabelStyle: {
    marginTop: 0,
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
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
  },
  datePickerStyle: {
    width: 140,
    marginLeft: 15
  },
  gameTypeOptionsStyle: {
    containerStyle: {
      height: 75,
      width: '90%',
      backgroundColor: 'rgba(255,255,255, 0.15)',
      marginBottom: 0,
      borderWidth: 0
    },
    selectedButtonStyle: {
      backgroundColor: 'rgba(255,255,255, 0.25)'
    },
    innerBorderStyle: {
      width: 0,
      color: 'rgba(255,255,255, 0.15)'
    }
  },
  buttonTextStyle: {
    marginTop: 0,
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  }
};

export default styles;
