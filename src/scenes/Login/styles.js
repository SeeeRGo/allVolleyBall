const labelBaseStyle = {
  fontSize: 12,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 20,
  paddingLeft: 15,
  paddingRight: 15
};

const bottomButtonText = {
  textAlign: 'center',
  color: 'white',
  fontSize: 12,
  fontWeight: '400'
};

const formInputBase = {
  paddingTop: 0,
  paddingBottom: 5,
  marginTop: 0
};

export default {
  logoStyle: {
    width: 50,
    height: 50
  },
  logoText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'sans-serif',
    fontWeight: '400'
  },
  headerLoginWindow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(9, 27, 117, 0.3)',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  headerLoginWindowTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: '400'
  },
  containerStyle: {
    height: '80%',
    maxHeight: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
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
  },
  rememberMeStyle: {
    color: '#415fa8',
    fontSize: 12,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  },
  registerButton: {
    ...bottomButtonText,
    flex: 1
  },
  sendButton: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendButtonText: {
    ...bottomButtonText
  },
  divider: {
    marginBottom: 10,
    marginTop: 3,
    backgroundColor: '#bfbfbf',
    width: '90%',
    alignSelf: 'center'
  }
};
