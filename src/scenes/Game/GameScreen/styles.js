import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
  
  textBlockStyle: {
    width: SCREEN_WIDTH * 0.85,
    maxWidth: SCREEN_WIDTH * 0.7,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 30,
    paddingRight: 20
  },
  buttonStyle: {
    width: SCREEN_WIDTH,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    position: 'absolute',
    bottom: 0
  },
  leftColumnStyle: {
    imageStyle: {
      width: SCREEN_WIDTH * 0.5,
      height: SCREEN_HEIGHT * 0.2
    },
    linksContainerStyle: {
      width: SCREEN_WIDTH * 0.5,
      height: SCREEN_HEIGHT * 0.2,
      backgroundColor: '#091b75'
    },
    textStyle: {
      maxWidth: (SCREEN_WIDTH * 0.45) - 50,
      color: 'white',
      fontSize: 14,
      textAlignVertical: 'center'
    }
  },
  rightColumnStyle: {
    containerStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10
    },
    iconContainerStyle: {
      paddingRight: 15
    },
    textStyle: {
      maxWidth: (SCREEN_WIDTH * 0.5) - 50,
      color: 'white',
      fontSize: 14
    },
    ratingStyle: {
      maxWidth: SCREEN_WIDTH * 0.2,
      alignSelf: 'center',
      flex: 1
    }
  }
};

export default styles;
