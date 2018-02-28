const bottomButtonText = {
  textAlign: 'center',
  color: 'white',
  fontSize: 12,
  fontWeight: '400'
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
