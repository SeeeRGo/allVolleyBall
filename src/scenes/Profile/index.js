import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import CustomHeader from '../../components/common/CustomHeader';
import styles from './styles';
import navBarStyles from '../../components/common/CustomHeader/navBarStyles';

class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    const { user } = this.props;
    const { textBlockStyle } = styles.profileSceneStyle;
    const linesOfText = Math.floor(textBlockStyle.maxHeight / 20);
    console.log(user);
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
              onPress={() => Actions.push('Feed')}
            />
          }
          leftText="3 игры"
          rightIcon={
            <Icon
              name="cog"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.push('ProfileForm', { userId: user.id })}
            />
          }
        />
        <View style={styles.profileContainer}>
          <Row>
            <LeftColumn user={user} />
            <RightColumn user={user} />
          </Row>
          <Text style={textBlockStyle} numberOfLines={linesOfText}>
            {user.selfInfo || 'Информация о себе не заполнена'}
          </Text>
        </View>
        <Button
          containerViewStyle={styles.offerGameButtonView}
          title="ПРЕДЛОЖИТЬ ИГРУ"
          buttonStyle={styles.offerGameButton}
        />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.userProfile
});

export default connect(mapStateToProps)(Profile);
