import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../components/common/Background';
import CustomHeader from '../../components/common/CustomHeader';
import navBarStyles, { SCREEN_HEIGHT } from '../../components/common/CustomHeader/navBarStyles';
import FormFields from './FormFields';
import { updateProfile } from '../Profile/actions';
import { uploadFile } from '../../actions/files';
import Avatars from './Avatars';
import styles from './styles';

class PlayerForm extends Component {
  handleProfileUpdate = () => {
    const {
      lastName, firstName, fatherName, birthdate, fbLink, city, photo,
      vkLink, phone, password, passwordRe, userId, updateProfile, uploadFile
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
      if (photo.uri) {
        uploadFile(photo.uri, 'profile', userId, true);
      }
    }
    Actions.push('Profile');
  }
  render() {
    console.log(this.props.userId);
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
              onPress={() => Actions.pop()}
            />
          }
        />
        <ScrollView style={{ bottom: 5, top: 5, maxHeight: '75%' }}>
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
  userId: state.user.userProfile.id
});

export default connect(mapStateToProps, { updateProfile, uploadFile })(PlayerForm);
