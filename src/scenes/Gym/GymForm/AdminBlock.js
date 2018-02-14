import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Divider } from 'react-native-elements';

import styles from './styles';
import QualificationSlider from './QualificationSlider';
import { SCREEN_WIDTH } from '../../../styles';

class AdminBlock extends Component {
  render() {
    const { formLabelStyle, formInputStyle } = styles;
    return (
      <View>
        <FormLabel labelStyle={[formLabelStyle, { alignSelf: 'center', marginTop: 25, marginBottom: 15 }]}>ОПИСАНИЕ ИГРЫ</FormLabel>
        <View style={{ backgroundColor: 'white' }}>
          <FormInput
            inputStyle={{ height: 120, backgroundColor: 'white', textAlignVertical: 'top' }}
            containerStyle={{ marginLeft: 0, marginRight: 0 }}
            multiline
            placeholder="Заполняется админом зала или админом системы"
            underlineColorAndroid="transparent"
            onChangeText={(value) => gameFormUpdate('gameInfo', value)}
          />
          <Text style={{ fontSize: 10, padding: 5 }}>ОЧИСТИТЬ</Text>
        </View>
        <QualificationSlider title="РАЗРЕШИТЬ ПОДТВЕРЖДЕНИЕ" />
        <View>
          <FormLabel labelStyle={[formLabelStyle]}>КОНТАКТНЫЙ ТЕЛЕФОН</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            onFocus={() => {}}
            onChangeText={(value) => gameFormUpdate('minPlayers', value)}
            containerStyle={{ marginLeft: 0, marginRight: 0 }}
            underlineColorAndroid="transparent"
            ref={(maxPlayers) => { this.maxPlayers = maxPlayers; }}
          />
          <Divider style={{
            marginBottom: 10, marginTop: 3, backgroundColor: '#bfbfbf', width: '100%'
          }}
          />
        </View>
      </View>
    );
  }
}

export default AdminBlock;
