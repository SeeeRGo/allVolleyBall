import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
  profileSceneStyle: {
    textBlockStyle: {
      width: SCREEN_WIDTH * 0.85,
      maxHeight: SCREEN_HEIGHT * 0.4,
      backgroundColor: 'white',
      alignSelf: 'flex-end',
      paddingLeft: 10,
      paddingTop: 15,
      paddingRight: 15
    }
  },
  leftColumnStyle: {
    imageStyle: {
      width: SCREEN_WIDTH * 0.5,
      height: SCREEN_HEIGHT * 0.2
    },
    containerStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10
    },
    iconContainerStyle: {
      paddingRight: 10
    },
    textStyle: {
      maxWidth: SCREEN_WIDTH * 0.4
    }
  },
  rightColumnStyle: {
    containerStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10
    },
    iconContainerStyle: {
      paddingRight: 10
    },
    rowContainerStyle: {
      flexDirection: 'row',
      padding: 10,
      maxWidth: SCREEN_WIDTH * 0.42
    }
  }
};

export default styles;
