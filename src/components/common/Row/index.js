import React, { Component } from 'react';
import { View } from 'react-native';

export default class Row extends Component {
  static defaultProps = {
    extraStyles: {}
  }
  render() {
    const { extraStyles, children } = this.props;
    return (
      <View style={[{ flexDirection: 'row' }, extraStyles]}>
        {children}
      </View>
    );
  }
}

