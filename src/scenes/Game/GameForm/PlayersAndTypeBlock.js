import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, ScrollView, Slider } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { FormInput, FormLabel, Rating, Icon, Divider } from 'react-native-elements';

import Row from '../../../components/common/Row';
import { gameFormUpdate } from './actions';
import styles from './styles';
import { SCREEN_WIDTH } from '../../../styles';

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

const volleyballTypes = [
  'ВОЛЕЙБОЛ КЛАССИЧЕСКИЙ',
  'ВОЛЕЙБОЛ ПЛЯЖНЫЙ'
];

const gameTypes = [
  'СВОБОДНАЯ ИГРА',
  'ТРЕНИРОВКА',
  'ИГРА ЧЕМПИОНАТА'

];

const minPlayersArray = [
  ...Array(20).fill().map((e, i) => i.toString())
];
const maxPlayersArray = [
  ...Array(20).fill().map((e, i) => i.toString())
];

class PlayersAndTypeBlock extends Component {
  static defaultProps = {
    gameType: 'ВОЛЕЙБОЛ КЛАССИЧЕСКИЙ',
    minPlayers: '0',
    maxPlayers: '0'
  }
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{ flex: 1, height: 30, alignItems: 'flex-end' }}
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
      <View style={containerStyle}>
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel>ВИД СПОРТА</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('volleyballType', volleyballTypes)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
        </Row>
        <Divider />
        <Row extraStyles={{ justifyContent: 'space-between' }}>
          <FormLabel>ТИП ИГРЫ</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('gameType', gameTypes)}
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
          <View style={{ justifyContent: 'space-between', width: SCREEN_WIDTH * 0.5 }}>
            <FormLabel labelStyle={formLabelStyle}>МИНИМУМ ИГРОКОВ</FormLabel>          
            <FormInput
              inputStyle={[formInputStyle]}
              onFocus={() => {}}
              onChangeText={() => {}}
              underlineColorAndroid="transparent"
              ref={(username) => { this.username = username; }}
            />
            <Divider style={{
              marginBottom: 10, marginTop: 3, backgroundColor: '#bfbfbf', width: '90%', alignSelf: 'center'
            }}
            />
          </View>    
          <View style={{ justifyContent: 'space-between', width: SCREEN_WIDTH * 0.45 }}>
            <FormLabel labelStyle={formLabelStyle}>МАКСИМУМ ИГРОКОВ</FormLabel>          
            <FormInput
              inputStyle={[formInputStyle]}
              onFocus={() => {}}
              onChangeText={() => {}}
              underlineColorAndroid="transparent"
              ref={(username) => { this.username = username; }}
            />
            <Divider style={{
              marginBottom: 10, marginTop: 3, backgroundColor: '#bfbfbf', width: '90%', alignSelf: 'center'
            }}
            />
          </View>         
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
  gameInfo: state.gameForm.gameInfo
});

export default connect(mapStateToProps, { gameFormUpdate })(PlayersAndTypeBlock);