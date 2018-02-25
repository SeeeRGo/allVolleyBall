import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const socialNetworkColors = {
  vkontakte: '#0077d9',
  facebook: '#415fa8'
};

const styles = {
  offerGameButtonView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginBottom: 0
  },
  offerGameButton: {
    backgroundColor: '#00bfb1'
  },
  profileContainer: {
    width: '100%',
    position: 'absolute',
    top: 50
  },
  profileSceneStyle: {
    textBlockStyle: {
      width: SCREEN_WIDTH * 0.85,
      maxHeight: (SCREEN_HEIGHT * 0.6) - 30,
      backgroundColor: 'white',
      alignSelf: 'flex-end',
      paddingLeft: 20,
      paddingTop: 25,
      paddingRight: 20,
      paddingBottom: 30,
      position: 'absolute',
      top: (SCREEN_HEIGHT * 0.4) - 25
    }
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
      maxWidth: SCREEN_WIDTH * 0.4,
      color: 'white',
      fontSize: 14
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
      maxWidth: SCREEN_WIDTH * 0.4,
      color: 'white',
      fontSize: 14
    }
  }
};

export default styles;
