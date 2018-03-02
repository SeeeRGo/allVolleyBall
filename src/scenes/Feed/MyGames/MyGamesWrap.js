import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../../components/common/Background';
import Row from '../../../components/common/Row';
import CustomHeader from '../../../components/common/CustomHeader';
import FooterButtonGroup from '../FooterButtonGroup';
import styles from './styles';
import navBarStyles from '../../../components/common/CustomHeader/navBarStyles';
import SubHeaderButtonGroup from './SubHeaderButtonGroup';

class MyGamesWrap extends Component {
  render() {
    const { messageTextStyle } = styles;
    const {
      firstName, lastName, children, selectedButton
    } = this.props;
    const rightIcon = selectedButton !== 1 ? (
      <Icon
        name="search"
        type="font-awesome"
        color="white"
        containerStyle={navBarStyles.rightIconStyles}
        onPress={() => Actions.push('Search')}
      />
    ) : (
      <Icon
        name="plus"
        type="font-awesome"
        color="white"
        containerStyle={navBarStyles.rightIconStyles}
        onPress={() => Actions.push('GameForm')}
      />
    );
    return (
      <Background>
        <CustomHeader
          title={`${firstName} ${lastName}`}
          leftIcon={
            <Icon
              name="navicon"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.leftIconStyles}
              onPress={() => Actions.push('Feed')}
            />
          }
          rightIcon={rightIcon}
        />
        <SubHeaderButtonGroup />
        {children}
        <FooterButtonGroup />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  lastName: state.user.userProfile.lastName,
  firstName: state.user.userProfile.firstName,
  selectedButton: state.selections.myGamesSubHeaderButtons
});

export default connect(mapStateToProps)(MyGamesWrap);
