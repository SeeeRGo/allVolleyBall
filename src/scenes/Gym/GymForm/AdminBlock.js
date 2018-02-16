import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Divider } from 'react-native-elements';

import { gymFormUpdate } from './actions';
import styles from './styles';
import QualificationSlider from './QualificationSlider';
import { SCREEN_WIDTH } from '../../../styles';

class AdminBlock extends Component {
  render() {
    const { formLabelStyle, formInputStyle } = styles;
    const {
      adminDataConfirmation, tarifGrid, contactPhone, gymFormUpdate
    } = this.props;
    return (
      <View>
        <FormLabel labelStyle={[formLabelStyle, { alignSelf: 'center', marginTop: 25, marginBottom: 15 }]}>ТАРИФНАЯ СЕТКА</FormLabel>
        <View style={{ backgroundColor: 'white' }}>
          <FormInput
            inputStyle={{ height: 120, backgroundColor: 'white', textAlignVertical: 'top' }}
            containerStyle={{ marginLeft: 0, marginRight: 0 }}
            multiline
            placeholder="Заполняется админом зала или админом системы"
            underlineColorAndroid="transparent"
            onChangeText={(value) => gymFormUpdate('tarifGrid', value)}
            ref={(tarifGridRef) => { this.tarifGrid = tarifGridRef; }}
          />
          <Text style={{ fontSize: 10, padding: 5 }}>ОЧИСТИТЬ</Text>
        </View>
        <QualificationSlider title="РАЗРЕШИТЬ ПОДТВЕРЖДЕНИЕ" fieldName="adminDataConfirmation" />
        <View>
          <FormLabel labelStyle={[formLabelStyle]}>КОНТАКТНЫЙ ТЕЛЕФОН</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            onFocus={() => {}}
            onChangeText={(value) => gymFormUpdate('contactPhone', value)}
            containerStyle={{ marginLeft: 0, marginRight: 0 }}
            underlineColorAndroid="transparent"
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

const mapStateToProps = (state) => ({
  contactPhone: state.gymForm.contactPhone,
  tarifGrid: state.gymForm.tarifGrid
});

export default connect(mapStateToProps, { gymFormUpdate })(AdminBlock);
