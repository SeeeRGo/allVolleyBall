import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/common/Background';
import Logo from '../../components/common/Logo';
import { loginBySocialNetwork } from '../../actions/user';
import { addSocialNetwork } from '../Signup/actions';
import styles from './styles';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.handleOpenURL = this.handleOpenURL.bind(this);
    this.getInitialURL = this.getInitialURL.bind(this);
  }

  componentDidMount() {
    console.log('olololo');
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then(this.getInitialURL);
  }

  componentWillUnmount() {
  }

  getInitialURL(url) {
    if (!url) {
      return;
    }
    this.handleOpenURL({ url });
  }

  handleOpenURL({ url }) {
    console.log(url, 'hhihihihihih');
    const [, userString] = url.match(/response=([^#]+)/);
    console.log(userString, 'userString');
    const [, type] = url.match(/type=([^#]+)/);
    console.log(type, 'type');
    const response = JSON.parse(decodeURI(userString));
    if (type === 'get') {
      this.props.addSocialNetwork(response);
    }
    this.props.loginBySocialNetwork(response);
  }

  render() {
    return (
      <Background type="one">
        <View style={styles.logoContainerStyle}>
          <Logo big />
        </View>
        <View style={styles.buttonContainerStyle} >
          <TouchableOpacity onPress={() => Actions.push('Auth')} style={styles.buttonStyle}>
            <Icon
              style={styles.buttonIconStyle}
              name="arrow-right"
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>НА СТАРТ!</Text>
        </View>
      </Background>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  addSocialNetwork: (response) => dispatch(addSocialNetwork(response)),
  loginBySocialNetwork: (response) => dispatch(loginBySocialNetwork(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
