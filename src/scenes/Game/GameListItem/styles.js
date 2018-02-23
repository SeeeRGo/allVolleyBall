import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = {
  iconStyle: {
    paddingLeft: 5,
    paddingRight: 5
  },
  rowHeight: {
    height: 25
  },
  blueText: {
    color: 'navy'
  },
  spaceAroundRow: {
    height: 25,
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center'
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
    backgroundColor: 'white'
  },
  leftColumnStyle: {
    width: SCREEN_WIDTH * 0.2 - 10,
    height: 100
  },
  imageContainerStyle: {
    width: SCREEN_WIDTH * 0.2 - 10,
    height: 80
  },
  ratingStyle: {
    maxWidth: SCREEN_WIDTH * 0.2 - 10,
    alignSelf: 'center',
    flex: 1
  },
  rightColumnStyle: {
    width: SCREEN_WIDTH * 0.8 - 10,
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
