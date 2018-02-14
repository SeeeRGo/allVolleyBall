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

class EmptyFeed extends Component {
  render() {
    const { messageTextStyle } = styles;
    const { firstName, lastName } = this.props;
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
              onPress={() => Actions.replace('Feed')}
            />
          }
          rightIcon={
            <Icon
              name="search"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('Search')}
            />
          }
        />
        <SubHeaderButtonGroup />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={messageTextStyle}>К сожалению,{'\n'}</Text>
          <Text style={messageTextStyle}>вы не подали ни одной заявки{'\n'}</Text>
          <Row>
            <Text style={messageTextStyle}>Воспользуйтесь поиском{' '}</Text>
            <Icon
              name="search"
              type="font-awesome"
              color="white"
              size={12}
            />
          </Row>
          <Text style={messageTextStyle}>и найдите подходящую игру</Text>
        </View>
        <FooterButtonGroup />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  lastName: state.profile.lastName,
  firstName: state.profile.firstName
});

export default connect(mapStateToProps)(EmptyFeed);
