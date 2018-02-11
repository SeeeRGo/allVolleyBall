import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../components/common/Background';
import FormFields from './FormFields';
import { updateProfile } from '../Profile/actions';
import Avatars from './Avatars';
import styles from './styles';

class PlayerForm extends Component {
  handleProfileUpdate() {
    const {
      lastName, firstName, fatherName, birthdate, fbLink, city,
      vkLink, phone, password, passwordRe, userId, updateProfile
    } = this.props;
    const updates = {
      lastName,
      firstName,
      fatherName,
      birthdate,
      fbLink,
      vkLink,
      phone,
      city
    };
    if (password === passwordRe) {
      updateProfile(updates, userId);
    }
    Actions.replace('Profile');
  }
  render() {
    console.log(this.props);
    return (
      <Background>
        <ScrollView>
          <Avatars />
          <FormFields />
        </ScrollView>
        <Button
          title="Сохранить и закрыть"
          onPress={this.handleProfileUpdate.bind(this)}
          containerViewStyle={styles.buttonStyle}
        />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  lastName: state.profileForm.lastName,
  firstName: state.profileForm.firstName,
  fatherName: state.profileForm.fatherName,
  birthdate: state.profileForm.birthDate,
  phone: state.profileForm.phone,
  address: state.profileForm.address,
  avatar: state.profileForm.avatar,
  vkLink: state.profileForm.vkLink,
  fbLink: state.profileForm.fbLink,
  city: state.profileForm.city,
  password: state.profileForm.password,
  passwordRe: state.profileForm.passwordRe,
  userId: state.user.userId
});

export default connect(mapStateToProps, { updateProfile })(PlayerForm);
