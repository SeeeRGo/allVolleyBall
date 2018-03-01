import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, Slider, Text, TouchableOpacity, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import _ from 'lodash';
import { FormInput, FormLabel, Rating, Divider, Icon, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Row from '../../../components/common/Row';
import { gameFormUpdate } from './actions';
import { createGym, findGym } from '../../Gym/GymScreen/actions';
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
  state = {
    gymNotFound: null,
    gymList: [],
    gymName: ''
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.gameAddress, nextProps.gameAddress)) {
      const city = _.find(nextProps.gameAddress.address_components, ['types', ['locality']]).long_name;
      const district = _.find(nextProps.gameAddress.address_components, ['types', ['sublocality']]).long_name;
      const street = _.find(nextProps.gameAddress.address_components, ['types', ['route']]).long_name;
      const house = _.find(nextProps.gameAddress.address_components, ['types', ['street_number']]).long_name;
      this.props.findGym({
        city, region: district, street, houseNumber: house
      })
        .then((result) => {
          if (result && result.length > 0) {
            this.setState({ gymNotFound: false });
          } else {
            this.setState({ gymNotFound: true });
          }
          this.props.findGym({
            city, region: district
          })
            .then((result) => {
              this.setState({ gymList: result });
            });
        });
    }
  }
  autoCreateGym = (name, reverseGeocodedAddress) => {
    const city = _.find(reverseGeocodedAddress, ['types', ['locality']]).long_name;
    const district = _.find(reverseGeocodedAddress, ['types', ['sublocality']]).long_name;
    const street = _.find(reverseGeocodedAddress, ['types', ['route']]).long_name;
    const house = _.find(reverseGeocodedAddress, ['types', ['street_number']]).long_name;
    this.props.createGym({
      city,
      district,
      street,
      house,
      details: name
    });
  }
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
      `Игра пройдет по адресу ${gameAddress.formatted_address} \n ` :
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
              resultPath: 'data.results[0]'
            })}
          >ВЫБРАТЬ НА КАРТЕ
          </Text>
        </Row>
        <Text style={[formLabelStyle, { alignSelf: 'center', maxWidth: '90%' }]}>{addressText}</Text>
        {/* {gymListHere} */}
        {
          this.state.gymList && this.state.gymList.length > 0 &&
          this.state.gymList.map((gym) => (
            <View>
              <Text style={[formLabelStyle, { maxWidth: '90%' }]}>{`Возможно вам подойдет зал "${gym.details}" по адресу ${gym.street}, ${gym.houseNumber}`}</Text>
            </View>
          ))
        }
        {
          this.state.gymNotFound &&
          <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={[formLabelStyle, { maxWidth: '90%' }]}>Зал по данному адресу в системе не найден</Text>
            <FormInput
              inputStyle={[formInputStyle, {
 fontSize: 20, color: 'white', borderWidth: 1, borderColor: 'white' 
}]}
              containerStyle={{ marginLeft: 0, marginRight: 0 }}
              value={this.state.gymName}
              placeholder="Имя зала"
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
              onChangeText={(value) => this.setState({ gymName: value })}
            />
            <Row extraStyles={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
              <Text style={formLabelStyle}>СОЗДАТЬ ЗАЛ</Text>
              <TouchableOpacity onPress={() => this.autoCreateGym(this.state.gymName, gameAddress.address_components)}>
                <Image
                  style={{ width: 50, height: 50, margin: 10 }}
                  source={require('../../../assets/icons_new_gym.png')}
                />
              </TouchableOpacity>
            </Row>
          </View>
        }
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


export default connect(mapStateToProps, { gameFormUpdate, createGym, findGym })(AddressAndInfoBlock);

