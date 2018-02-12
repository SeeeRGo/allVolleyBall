import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { getProfile } from './actions';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import CustomHeader from '../../components/common/CustomHeader';
import styles from './styles';
import navBarStyles from '../../components/common/CustomHeader/navBarStyles';

class Profile extends Component {
  static defaultProps = {
    info: 'Друзья! Приглашаю вас 19 июля на очередную'
  }
  static propTypes = {
    info: PropTypes.string
  }
  static onEnter = () => {
    Keyboard.dismiss();
  }
  componentWillMount() {
    this.props.getProfile(this.props.userId);
  }
  render() {
    const { info, firstName, lastName } = this.props;
    const { textBlockStyle } = styles.profileSceneStyle;
    const linesOfText = Math.floor(textBlockStyle.maxHeight / 20);
    return (
      <Background>
        <CustomHeader
          title="Личный кабинет"
          showBackButton
          leftIcon={
            <Icon
              name="ban"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.leftIconStyles}
              onPress={() => Actions.replace('Feed')}
            />
          }
          leftText="3 игры"
          rightIcon={
            <Icon
              name="cog"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('ProfileForm', { userId: this.props.userId })}
            />
          }
        />
        <View style={{ width: '100%', position: 'absolute', top: 30 }}>
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
  info: state.profile.info,
  userId: state.user.userId
});

export default connect(mapStateToProps, { getProfile })(Profile);
