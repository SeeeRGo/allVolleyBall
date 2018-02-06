import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
  formLabelStyle: {
    marginTop: 0,
    maxWidth: 150
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
  },
  datePickerStyle: {
    width: 140,
    marginLeft: 15
  }
}

export default styles;
