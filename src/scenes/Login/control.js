import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Input, Item, Icon } from 'native-base';
import { FormLabel } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Control extends Component {
  constructor(props) {
    super(props);
    this.handleFocusControl = this.handleFocusControl.bind(this);
    this.handleBlurControl = this.handleBlurControl.bind(this);
  }

  state = {
    isFocused: false
  }

  getInputStyle() {
    if (this.state.isFocused) {
      return styles.formInputFocusedStyle;
    }
    return styles.formInputStyle;
  }

  handleFocusControl() {
    this.setState({
      isFocused: true
    });
  }

  handleBlurControl() {
    this.setState({
      isFocused: false
    });
  }

  renderLabelInfo() {
    if (this.props.value) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={
          this.props.onPressLabelInfo ? this.props.onPressLabelInfo : () => this.input.focus()
        }
      >
        <FormLabel labelStyle={styles.formLabelInfoStyle}>{this.props.labelInfo}</FormLabel>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => this.input.focus()}>
            <FormLabel labelStyle={styles.formLabelStyle}>
              {this.props.label.toUpperCase()}
            </FormLabel>
          </TouchableOpacity>
          {this.renderLabelInfo()}
        </View>
        <Item>
          <Input
            placeholder={this.props.label}
            secureTextEntry={this.props.secureTextEntry}
            style={this.getInputStyle()}
            value={this.props.value}
            onFocus={this.handleFocusControl}
            onBlur={this.handleBlurControl}
            onChangeText={this.props.onChangeText}
            underlineColorAndroid="transparent"
            ref={(input) => { this.input = input; }}
          />
          {
            this.props.value ?
              (<Icon onPress={() => this.props.onChangeText('')} name="close" />) :
              null
          }
        </Item>
      </View>
    );
  }
}

Control.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  onPressLabelInfo: PropTypes.func,
  labelInfo: PropTypes.string
};

Control.defaultProps = {
  secureTextEntry: false,
  onPressLabelInfo: () => {},
  labelInfo: ''
};

export default Control;
