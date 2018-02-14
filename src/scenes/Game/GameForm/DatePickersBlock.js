import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, Slider, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Rating, Icon } from 'react-native-elements';

import Row from '../../../components/common/Row';
import { gameFormUpdate } from './actions';
import styles from './styles';

class DatePickersBlock extends Component {
  render() {
    const { formLabelStyle, datePickerCustomStyle, datePickerStyle } = styles;
    const {
      gameType, minPlayers, maxPlayers, price, gameTime, gameDate,
      startTime, finishTime, gameAddress, gameInfo, gameFormUpdate, gameEndTime, gameStartTime
    } = this.props;
    return (
      <View>
        <FormLabel labelStyle={[formLabelStyle, { textAlign: 'center' }]} containerStyle={{ alignSelf: 'center' }}>ДАТА И ВРЕМЯ НАЧАЛА ИГРЫ</FormLabel>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <Icon
            name="calendar"
            type="font-awesome"
            color="white"
          />
          <Icon
            name="clock-o"
            type="font-awesome"
            color="white"
          />
        </Row>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <DatePicker
            style={datePickerStyle}
            date={gameDate}
            value={gameDate}
            mode="date"
            placeholder="select date"
            format="DD MMM YYYY"
            minDate={moment().format('DD/MMM/YYYY')}
            maxDate={moment().endOf('year').format('DD/MMM/YYYY')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={(value) => gameFormUpdate('gameDate', value)}
            androidMode="spinner"
          />
          <DatePicker
            style={datePickerStyle}
            date={gameTime}
            value={gameTime}
            mode="time"
            placeholder="select date"
            format="HH mm"
            minDate="0 00"
            maxDate="23 59"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={(value) => gameFormUpdate('gameTime', value)}
            androidMode="spinner"
          />
        </Row>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <FormLabel labelStyle={formLabelStyle}>НАЧАЛО БРОНИ/СБОРА</FormLabel>
          <FormLabel labelStyle={formLabelStyle}>ОКОНЧАНИЕ БРОНИ</FormLabel>
        </Row>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <DatePicker
            style={datePickerStyle}
            date={gameStartTime}
            value={gameStartTime}
            mode="time"
            placeholder="select date"
            format="HH mm"
            minDate="0 00"
            maxDate="23 59"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={(value) => gameFormUpdate('gameStartTime', value)}
            androidMode="spinner"
          />
          <DatePicker
            style={datePickerStyle}
            date={gameEndTime}
            value={gameEndTime}
            mode="time"
            placeholder="select date"
            format="HH mm"
            minDate="0 00"
            maxDate="23 59"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={(value) => gameFormUpdate('gameEndTime', value)}
            androidMode="spinner"
          />
        </Row>
      </View>
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
  gameInfo: state.gameForm.gameInfo,
  gameDate: state.gameForm.gameDate,
  gameStartTime: state.gameForm.gameStartTime,
  gameEndTime: state.gameForm.gameEndTime
});


export default connect(mapStateToProps, { gameFormUpdate })(DatePickersBlock);
