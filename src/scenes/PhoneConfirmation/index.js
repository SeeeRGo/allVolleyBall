import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import PhoneConfirmed from './Confirmed';
import PhoneToConfirm from './ToConfirm';

class PhoneConfirmation extends Component {
  render() {
    const { phoneConfirmed } = this.props;
    return (
      phoneConfirmed ? <PhoneConfirmed /> : <PhoneToConfirm />
    );
  }
}

export default PhoneConfirmation;
