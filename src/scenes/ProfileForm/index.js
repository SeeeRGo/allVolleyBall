import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Background from '../../components/common/Background';
import FormFields from './FormFields';
import Avatars from './Avatars';
import styles from './styles';

class PlayerForm extends Component {
  render() {
    return (
      <Background>
        <ScrollView>
          <Avatars />
          <FormFields />
        </ScrollView>
        <Button
          title="Сохранить и закрыть"
          onPress={() => Actions.replace('Profile')}
          containerViewStyle={styles.buttonStyle}
        />
      </Background>
    );
  }
}

export default PlayerForm;
