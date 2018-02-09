import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button, FormInput } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../components/common/Background';
import CustomHeader from '../../components/common/CustomHeader';
import styles from './styles';
import navBarStyles from '../../components/common/CustomHeader/navBarStyles';

class PhoneToConfirm extends Component {
  constructor(props) {
    super(props);
    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleConfirmCode = this.handleConfirmCode.bind(this);
  }
  state = {
    codeValid: true,
    buttonActive: false,
    code: ''
  }
  handleChangeCode(code) {
    if (code.length === 4) {
      this.setState({ buttonActive: true });
    } else if (code.length === 0) {
      this.setState({ buttonActive: false });
    }
    const codeExp = new RegExp(/(^$)|^\d{1,4}$/);
    if (codeExp.test(code)) {
      this.setState({ code });
    }
  }
  handleConfirmCode() {
    if (this.state.code === '1234') {
      Actions.replace('PhoneConfirmation', { phoneConfirmed: true });
    } else {
      this.setState({ codeValid: false });
    }
  }
  render() {
    const {
      buttonContainerStyle, buttonStyle, titleStyle, textStyle
    } = styles;
    const { codeValid, buttonActive, code } = this.state;
    return (
      <Background type="one">
        <CustomHeader
          title="Подтвердите телефон"
          rightIcon={
            <Icon
              name="close"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('Signup')}
            />
          }
        />
        <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={codeValid ? titleStyle.isValid : titleStyle.isNotValid}>
            {codeValid ? titleStyle.isValid.title : titleStyle.isNotValid.title}
          </Text>
          <FormInput
            inputStyle={{ width: 75, fontSize: 30, color: 'white' }}
            placeholder="9999"
            placeholderTextColor="white"
            underlineColorAndroid="white"
            value={code}
            onChangeText={this.handleChangeCode}
          />
          <Text style={[textStyle, { fontSize: 10 }]}>Проблемы с получением кода?</Text>
          <Text style={[textStyle, { fontSize: 12 }]}>ОТПРАВИТЬ НОВЫЙ КОД</Text>
        </View>
        <Button
          containerViewStyle={buttonContainerStyle}
          title="ПОДТВЕРДИТЬ"
          buttonStyle={buttonActive ? buttonStyle.isActive : buttonStyle.isNotActive}
          onPress={this.handleConfirmCode}
        />
      </Background>
    );
  }
}

export default PhoneToConfirm;
