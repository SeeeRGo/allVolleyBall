import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, Slider } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Rating } from 'react-native-elements';

import Row from '../../../components/common/Row';
import { gameFormUpdate } from './actions';
import styles from './styles';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

const volleyballTypes = [
  'Классический',
  'Пляжный',
  'Пионербол'
];

const minPlayersArray = [
  ...Array(20).fill().map((e, i) => i.toString())
];
const maxPlayersArray = [
  ...Array(20).fill().map((e, i) => i.toString())
];


class FormFields extends Component {
  static defaultProps = {
    gameType: 'Классический',
    minPlayers: '0',
    maxPlayers: '0'
  }
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{ flex: 1 }}
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
      gameTime, startTime, finishTime, gameAddress, gameInfo
    } = this.props;
    return (
      <ScrollView>
        <View style={containerStyle}>
          <FormLabel>ПАФОСНЫЙ ЗАГОЛОВОК ПРО СОЗДАНИЕ ИГРЫ</FormLabel>
          <Row extraStyles={{ justifyContent: 'space-around' }}>
            <FormLabel labelStyle={[formLabelStyle]}>ТИП ИГРЫ*</FormLabel>
            <FormLabel labelStyle={[formLabelStyle]}>ВОЛЕЙБОЛ</FormLabel>
          </Row>
          {this.renderPicker('gameType', volleyballTypes)}
          <Row>
            <FormLabel labelStyle={[formLabelStyle]}>МИНИМУМ ИГРОКОВ</FormLabel>
            {this.renderPicker('minPlayers', minPlayersArray)}
          </Row>
          <Row>
            <FormLabel labelStyle={[formLabelStyle]}>МАКСИМУМ ИГРОКОВ</FormLabel>
            {this.renderPicker('maxPlayers', maxPlayersArray)}
          </Row>
          <Row>
            <FormLabel labelStyle={[formLabelStyle]}>УРОВЕНЬ</FormLabel>
            <Rating
              imageSize={20}
              startingValue={1}
              ratingCount={4}
              style={ratingStyle}
              onFinishRating={() => {}}
            />
          </Row>
          <FormLabel labelStyle={formLabelStyle}>ЦЕНА УЧАСТИЯ</FormLabel>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>0 Р</FormLabel>
            <Slider
              minimumValue={0}
              maximumValue={2000}
              value={price}
              step={100}
              style={{ width: 200 }}
              onSlidingComplete={(value) => gameFormUpdate('price', value)}
            />
            <FormLabel labelStyle={formLabelStyle}>2000 Р</FormLabel>
          </Row>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>ДАТА И ВРЕМЯ ИГРЫ</FormLabel>
            <DatePicker
              style={datePickerStyle}
              date={moment(gameTime).format('DD/MM/YY HH:mm')}
              mode="datetime"
              placeholder="select date"
              format="DD/MM/YY HH:mm"
              minDate={moment().add(1, 'days').format('DD/MM/YY HH:mm')}
              maxDate={moment().endOf('year').format('DD/MM/YY HH:mm')}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={datepickerCustomStyle}
              onDateChange={(value) => gameFormUpdate('gameTime', moment(value, 'DD/MM/YY HH:mm').toISOString())}
            />
          </Row>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>ВРЕМЯ НАЧАЛА</FormLabel>
            <DatePicker
              style={datePickerStyle}
              date={moment(startTime).format('HH:mm')}
              mode="time"
              placeholder="select date"
              format="HH:mm"
              minDate="0:00"
              maxDate="23:59"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={datepickerCustomStyle}
              onDateChange={(value) => gameFormUpdate('startTime', moment(value, 'HH:mm').toISOString())}
            />
          </Row>
          <Row>
            <FormLabel labelStyle={formLabelStyle}>ВРЕМЯ ОКОНЧАНИЯ</FormLabel>
            <DatePicker
              style={datePickerStyle}
              date={moment(finishTime).format('HH:mm')}
              mode="time"
              placeholder="select date"
              format="HH:mm"
              minDate="0:00"
              maxDate="23:59"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={datepickerCustomStyle}
              onDateChange={(value) => gameFormUpdate('finishTime', moment(value, 'HH:mm').toISOString())}
            />
          </Row>
          <FormLabel labelStyle={[formLabelStyle]}>АДРЕС</FormLabel>
          <FormInput
            inputStyle={[formInputStyle]}
            value={gameAddress}
            onChangeText={(value) => gameFormUpdate('gameAddress', value)}
          />
          <FormLabel labelStyle={[formLabelStyle]}>ОПИСАНИЕ</FormLabel>
          <FormInput
            inputStyle={[formInputStyle, { maxWidth: '100%' }]}
            multiline
            value={gameInfo}
            onChangeText={(value) => gameFormUpdate('gameInfo', value)}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  gameType: state.gameForm.gameType,
  minPlayers: state.gameForm.minPlayers,
  maxPlayers: state.gameForm.maxPlayers,
  price: state.gameForm.price,
  gameTime: state.gameForm.gameTime,
  startTime: state.gameForm.startTime,
  finishTime: state.gameForm.finishTime,
  gameAddress: state.gameForm.gameAddress,
  gameInfo: state.gameForm.gameInfo
});

export default connect(mapStateToProps, { gameFormUpdate })(FormFields);
