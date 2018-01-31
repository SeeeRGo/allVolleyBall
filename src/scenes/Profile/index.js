import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';

class Profile extends Component {
  static defaultProps = {
    info: 'Друзья! Приглашаю вас 19 июля на очередную'
  }
  static propTypes = {
    info: PropTypes.string
  }
  render() {
    const { info } = this.props;
    const { textBlockStyle } = styles.profileSceneStyle;
    const linesOfText = Math.floor(textBlockStyle.maxHeight / 20);
    return (
      <Background>
        <View style={{ width: '100%' }}>
          <Row>
            <LeftColumn />
            <RightColumn />
          </Row>
          <Text style={textBlockStyle} numberOfLines={linesOfText}>
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
            {info}{'\n'}
          </Text>
        </View>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.profile.info
});

export default connect(mapStateToProps)(Profile);
