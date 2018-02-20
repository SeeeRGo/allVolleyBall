import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../components/common/Background';
import CustomHeader from '../../components/common/CustomHeader';
import navBarStyles from '../../components/common/CustomHeader/navBarStyles';
import FormFields from './FormFields';
import { updateProfile } from '../Profile/actions';
import Avatars from './Avatars';
import styles from './styles';

class PlayerForm extends Component {
  handleProfileUpdate = () => {
    const {
      lastName, firstName, fatherName, birthdate, fbLink, city, photo,
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
      city,
      photo
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
        <CustomHeader
          title="Настройки профиля"
          rightIcon={
            <Icon
              name="close"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('Signup')}
            />
          }
        />
        <ScrollView>
          <Avatars />
          <FormFields />
        </ScrollView>
        <Button
          title="СОХРАНИТЬ И ЗАКРЫТЬ"
          onPress={this.handleProfileUpdate}
          containerViewStyle={styles.buttonStyle}
          buttonStyle={{ backgroundColor: '#00bfb1' }}
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
  photo: state.profileForm.photo,
  vkLink: state.profileForm.vkLink,
  fbLink: state.profileForm.fbLink,
  city: state.profileForm.city,
  password: state.profileForm.password,
  passwordRe: state.profileForm.passwordRe,
  userId: state.user.userId
});

export default connect(mapStateToProps, { updateProfile })(PlayerForm);
