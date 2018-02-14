import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { FormLabel, FormInput, Divider, Icon } from 'react-native-elements';

import Row from '../../../components/common/Row';
import styles from './styles';

import { SCREEN_WIDTH } from '../../../styles';

const cities = [
  'ТОЛЬЯТТИ',
  'МОСКВА',
  'САНКТ-ПЕТЕРБУРГ'
];

const streets = [
  'МИРА',
  'ЛЕНИНА',
  'ПОБЕДЫ'
];

const houses = [
  '1А',
  '2Б',
  '3В'
];


class AddressForm extends Component {
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
    const { containerStyle, formLabelStyle } = styles;
    return (
      <View style={containerStyle}>
        <Row extraStyles={{ marginBottom: 20 }}>
          <Text style={[formLabelStyle, { left: SCREEN_WIDTH * 0.25, width: SCREEN_WIDTH * 0.5, textAlign: 'center' }]}>АДРЕС ИГРЫ</Text>
          <Text style={[formLabelStyle, {
            left: SCREEN_WIDTH * 0.15, width: SCREEN_WIDTH * 0.35, textAlign: 'right', color: 'yellow', alignSelf: 'flex-end'
          }]}
          >ВЫБРАТЬ НА КАРТЕ
          </Text>
        </Row>
        <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FormLabel labelStyle={formLabelStyle}>ГОРОД</FormLabel>
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
          <FormLabel labelStyle={formLabelStyle}>РАЙОН</FormLabel>
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
          <FormLabel labelStyle={formLabelStyle}>СТАНЦИЯ МЕТРО</FormLabel>
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
          <FormLabel labelStyle={formLabelStyle}>УЛИЦА</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('street', streets)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Divider />
        <Row>
          <View style={{ width: SCREEN_WIDTH * 0.3, marginRight: 10 }}>
            <FormLabel labelStyle={[formLabelStyle, { fontSize: 10 }]}>ДОМ</FormLabel>
            <Row extraStyles={{ flex: 1, justifyContent: 'space-between' }}>
              <Icon
                name="angle-down"
                type="font-awesome"
                color="white"
                containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
              />
              {this.renderPicker('house', houses)}
            </Row>
            <Divider />
          </View>
          <View style={{ width: SCREEN_WIDTH * 0.3, marginRight: 10 }}>
            <FormLabel labelStyle={[formLabelStyle, { fontSize: 10 }]}>КОРПУС</FormLabel>
            <Row extraStyles={{ flex: 1, justifyContent: 'space-between' }}>
              <Icon
                name="angle-down"
                type="font-awesome"
                color="white"
                containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
              />
              {this.renderPicker('house', houses)}
            </Row>
            <Divider />
          </View>
          <View style={{ width: SCREEN_WIDTH * 0.3, marginRight: 10 }}>
            <FormLabel labelStyle={[formLabelStyle, { fontSize: 10 }]}>СТРОЕНИЕ</FormLabel>
            <Row extraStyles={{ flex: 1, justifyContent: 'space-between' }}>
              <Icon
                name="angle-down"
                type="font-awesome"
                color="white"
                containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
              />
              {this.renderPicker('house', houses)}
            </Row>
            <Divider />
          </View>
        </Row>
      </View>
    );
  }
}

export default AddressForm;
