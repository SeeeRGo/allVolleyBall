import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../../components/common/Background';
import Row from '../../../components/common/Row';
import CustomHeader from '../../../components/common/CustomHeader';
import FooterButtonGroup from '../FooterButtonGroup';
import styles from '../styles';
import navBarStyles from '../../../components/common/CustomHeader/navBarStyles';

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
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[messageTextStyle, { marginBottom: 20 }]}>EMPTY GYMS</Text>
          <Row>
            <Text style={messageTextStyle}>Для начала воспользуйтесь поиском{' '}</Text>
            <Icon
              name="search"
              type="font-awesome"
              color="white"
              size={12}
            />
            <Text style={messageTextStyle}>,</Text>
          </Row>
          <Text style={messageTextStyle}>чтобы найти подходящую игру, зал{'\n'}или создайте свои</Text>
        </View>
        <Row extraStyles={{
          justifyContent: 'space-around', flex: 1, position: 'absolute', bottom: 50
        }}
        >
          <Row extraStyles={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={textStyle}>СОЗДАТЬ ЗАЛ</Text>
            <Image
              style={{ width: 50, height: 50, margin: 10 }}
              source={require('../../../assets/icons_new_gym.png')}
            />
          </Row>
          <Row extraStyles={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={textStyle}>СОЗДАТЬ ИГРУ</Text>
            <TouchableOpacity onPress={() => Actions.replace('GameForm', { actionType: 'create' })}>
              <Image
                style={{ width: 50, height: 50, margin: 10 }}
                source={require('../../../assets/icons_new_game.png')}
              />
            </TouchableOpacity>
          </Row>
        </Row>
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
