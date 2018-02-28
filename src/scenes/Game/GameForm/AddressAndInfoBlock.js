import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, Slider, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Rating, Divider, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Row from '../../../components/common/Row';
import { gameFormUpdate } from './actions';
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

class AddressAndInfoBlock extends Component {
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{
          flex: 1, height: 30, alignItems: 'flex-end', color: 'white'
        }}
        selectedValue={this.props[fieldName]}
        onValueChange={(value) => this.props.gameFormUpdate(fieldName, value)}
      >
        {itemList.map((item) => <Picker.Item key={item} label={item} value={item} />)}
      </Picker>
    );
  }
  render() {
    const {
      formInputStyle, formLabelStyle, containerStyle,
      datePickerStyle, ratingStyle, datepickerCustomStyle
    } = styles;
    const {
      gameType, minPlayers, maxPlayers, price, gameFormUpdate,
      gameTime, startTime, finishTime, gameAddress, gameInfo, street, house, city
    } = this.props;
    const addressText = gameAddress ?
      `Игра пройдет по адресу ${gameAddress} \n а здесь должен быть список близлежащих залов` :
      'Выберите адрес игры на карте';
    return (
      <View style={containerStyle}>
        <Row extraStyles={{ marginBottom: 20 }}>
          <Text style={[formLabelStyle, { left: SCREEN_WIDTH * 0.25, width: SCREEN_WIDTH * 0.5, textAlign: 'center' }]}>АДРЕС ИГРЫ</Text>
          <Text
            style={[formLabelStyle, {
              left: SCREEN_WIDTH * 0.15, width: SCREEN_WIDTH * 0.35, textAlign: 'right', color: 'yellow', alignSelf: 'flex-end'
            }]}
            onPress={() => Actions.push('Map', {
              onAddressSubmit: gameFormUpdate,
              addressUseType: 'gameAddress',
              resultType: 'street_address',
              resultPath: 'data.results[0].formatted_address'
            })}
          >ВЫБРАТЬ НА КАРТЕ
          </Text>
        </Row>
        <Text style={formLabelStyle}>{addressText}</Text>
        {/* <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center' }}>
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
        <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FormLabel labelStyle={formLabelStyle}>ДОМ, ЗДАНИНЕ</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('house', houses)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Divider /> */}
        <FormLabel labelStyle={[formLabelStyle, { alignSelf: 'center', marginTop: 25, marginBottom: 15 }]}>ОПИСАНИЕ ИГРЫ</FormLabel>
        <View style={{ backgroundColor: 'white' }}>
          <FormInput
            inputStyle={{ height: 120, backgroundColor: 'white', textAlignVertical: 'top' }}
            containerStyle={{ marginLeft: 0, marginRight: 0 }}
            multiline
            placeholder="Пишем текст описания"
            underlineColorAndroid="transparent"
            onChangeText={(value) => gameFormUpdate('gameInfo', value)}
          />
          <Text style={{ fontSize: 10, padding: 5 }}>ОЧИСТИТЬ</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  gameType: state.gameForm.gameType,
  minPlayers: state.gameForm.minPlayers,
  maxPlayers: state.gameForm.maxPlayers,
  price: state.gameForm.price,
  city: state.gameForm.city,
  house: state.gameForm.house,
  street: state.gameForm.street,
  gameAddress: state.gameForm.gameAddress,
  gameInfo: state.gameForm.gameInfo
});


export default connect(mapStateToProps, { gameFormUpdate })(AddressAndInfoBlock);

