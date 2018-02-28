const labelBaseStyle = {
  fontSize: 12,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 20,
  paddingLeft: 15,
  paddingRight: 15
};

const formInputBase = {
  paddingTop: 0,
  paddingBottom: 5,
  marginTop: 0
};

export default {
  formLabelStyle: {
    ...labelBaseStyle,
    color: '#415fa8'
  },
  formLabelInfoStyle: {
    ...labelBaseStyle,
    color: '#bfbfbf'
  },
  formInputStyle: {
    ...formInputBase,
    height: 30,
    fontSize: 10
  },
  formInputFocusedStyle: {
    ...formInputBase,
    height: 40,
    fontSize: 20
  }
};
