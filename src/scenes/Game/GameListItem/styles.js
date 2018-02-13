import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = {
  iconStyle: {
    padding: 5
  },
  rowHeight: {
    height: 25
  },
  blueText: {
    color: 'navy'
  },
  spaceAroundRow: {
    height: 25,
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
  },
  boldTextStyle: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'navy'
  },
  gameContainerStyle: {
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10
  },
  leftColumnStyle: {
    width: SCREEN_WIDTH * 0.2, 
    height: 100
  },
  imageContainerStyle: {
    width: SCREEN_WIDTH * 0.2,
    height: 80
  },
  ratingStyle: {
    maxWidth: SCREEN_WIDTH * 0.2,
    alignSelf: 'center',
    flex: 1
  },
  rightColumnStyle: {
    width: SCREEN_WIDTH * 0.8,
    height: 100,
    backgroundColor: 'white'
  },
  blueBgTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.21,
    backgroundColor: 'navy',
    color: 'white'
  },
  redBgTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.1,
    backgroundColor: 'red',
    color: 'white'
  },
  borderedBlueTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.21,
    color: 'navy',
    borderBottomWidth: 1,
    borderRightWidth: 1 
  },
  borderedRedTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.14,
    color: 'red',
    borderBottomWidth: 1,
    borderRightWidth: 1 
  },
  borderedTealTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.14,
    color: 'teal',
    borderBottomWidth: 1
  }

};

export default styles;
