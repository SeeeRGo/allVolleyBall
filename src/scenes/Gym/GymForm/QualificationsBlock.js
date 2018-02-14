import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Divider, FormLabel, Icon } from 'react-native-elements';

import QualificationSlider from './QualificationSlider';
import Row from '../../../components/common/Row';
import styles from './styles';

const cities = [
  'ТОЛЬЯТТИ',
  'МОСКВА',
  'САНКТ-ПЕТЕРБУРГ'
];

class QualificationsBlock extends Component {
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{
          flex: 1, height: 30, alignItems: 'flex-end', color: 'white'
        }}
        selectedValue={this.props[fieldName]}
        onValueChange={(value) => this.props.gymFormUpdate(fieldName, value)}
      >
        {itemList.map((item) => <Picker.Item key={item} label={item} value={item} />)}
      </Picker>
    );
  }
  render() {
    const { formLabelStyle, textStyle } = styles;
    return (
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 15 }}>
        <Text style={textStyle}>КВАЛИФИКАЦИЯ ЗАЛА</Text>
        <QualificationSlider title="АУТЫ" />
        <QualificationSlider title="РАЗБЕГИ" />
        <QualificationSlider title="ПОТОЛКИ" />
        <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16, fontWeight: 'normal' }]}>ПОКРЫТИЕ</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('city', cities)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Divider />
        <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FormLabel labelStyle={[formLabelStyle, { fontSize: 16, fontWeight: 'normal' }]}>ОБЩЕЕ СОСТОЯНИЕ ЗАЛА</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('city', cities)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Divider />
        <QualificationSlider title="РАЗДЕВАЛКИ" />
        <QualificationSlider title="ДУШЕВЫЕ" />
        <QualificationSlider title="ПАРКОВКА" />
        <QualificationSlider title="ПРОПУСКНОЙ РЕЖИМ" />
      </View>
    );
  }
}

export default QualificationsBlock;
