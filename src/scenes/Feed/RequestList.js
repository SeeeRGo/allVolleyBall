import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import FeedListItem from './FeedListItem';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import CustomHeader from '../../components/common/CustomHeader';
import FooterButtonGroup from './FooterButtonGroup';
import styles from './styles';
import navBarStyles from '../../components/common/CustomHeader/navBarStyles';

class EmptyFeed extends Component {
  render() {
    const { textStyle, buttonTextStyle, messageTextStyle } = styles;
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
              onPress={() => Actions.push('Feed')}
            />
          }
          rightIcon={
            <Icon
              name="search"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.push('Search')}
            />
          }
        />
        {this.props.requestList.map((request) => (
          <FeedListItem request={request} />
        ))}
        <FooterButtonGroup />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  lastName: state.profile.lastName,
  firstName: state.profile.firstName,
  userId: state.user.userProfile.id
});

export default connect(mapStateToProps)(EmptyFeed);
