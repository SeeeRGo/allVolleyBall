const titleStyleBase = {
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
  marginTop: 10,
  marginBottom: 10
};

export default {
  buttonContainerStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  buttonImageStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  buttonStyle: {
    isActive: {
      backgroundColor: '#00bfb1'
    },
    isNotActive: {
      backgroundColor: 'rgba(255, 255, 255, 0.25)'
    }
  },
  titleStyle: {
    isValid: {
      ...titleStyleBase,
      title: 'Введите код из sms'
    },
    isNotValid: {
      ...titleStyleBase,
      color: '#b30005',
      title: 'Неверный код'
    }
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    marginTop: 7,
    marginBottom: 7,
    textAlign: 'center'
  }
};
