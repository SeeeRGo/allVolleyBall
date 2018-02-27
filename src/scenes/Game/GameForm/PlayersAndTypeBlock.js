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

const sportTypes = [
  'Классический волейбол',
  'Пляжный волейбол'
];

const gameTypes = [
  'Свободная игра',
  'Тренировка',
  'Игра чемпионата'

];

class PlayersAndTypeBlock extends Component {
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{
          flex: 1, height: 30, alignItems: 'flex-end', color: 'white'
        }}
        textStyle={{ fontSize: 12 }}
        selectedValue={this.props[fieldName]}
        onValueChange={(value) => this.props.gameFormUpdate(fieldName, value)}
      >
        {itemList.map((item) => <Picker.Item style={{ fontSize: 12 }} key={item} label={item} value={item} />)}
      </Picker>
    );
  }
  render() {
    const {
      formInputStyle, formLabelStyle, containerStyle,
      datePickerStyle, ratingStyle, datepickerCustomStyle
    } = styles;
    const {
      gameType, minPlayers, maxPlayers, price, gameFormUpdate, sportType,
      gameTime, startTime, finishTime, gameAddress, gameInfo
    } = this.props;
    return (
      <View style={containerStyle}>
        <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
          <FormLabel labelStyle={formLabelStyle}>ВИД СПОРТА</FormLabel>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('sportType', sportTypes)}
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
          <FormLabel labelStyle={formLabelStyle}>ТИП ИГРЫ</FormLabel>
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
            <FormLabel labelStyle={[formLabelStyle]}>МИНИМУМ ИГРОКОВ</FormLabel>
            <FormInput
              inputStyle={[formInputStyle, { width: SCREEN_WIDTH * 0.4 }]}
              containerStyle={{ marginLeft: 0, marginRight: 0 }}
              onFocus={() => {}}
              onChangeText={(value) => gameFormUpdate('minPlayers', value)}
              underlineColorAndroid="transparent"
            />
            <Divider style={{
              marginBottom: 10, marginTop: 3, backgroundColor: '#bfbfbf', width: '90%'
            }}
            />
          </View>
          <View style={{ justifyContent: 'space-between', width: SCREEN_WIDTH * 0.45 }}>
            <FormLabel labelStyle={[formLabelStyle]}>МАКСИМУМ ИГРОКОВ</FormLabel>
            <FormInput
              inputStyle={[formInputStyle, { width: SCREEN_WIDTH * 0.4 }]}
              onFocus={() => {}}
              onChangeText={(value) => gameFormUpdate('maxPlayers', value)}
              containerStyle={{ marginLeft: 0, marginRight: 0 }}
              underlineColorAndroid="transparent"
            />
            <Divider style={{
              marginBottom: 10, marginTop: 3, backgroundColor: '#bfbfbf', width: '100%'
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
  sportType: state.gameForm.sportType
});

export default connect(mapStateToProps, { gameFormUpdate })(PlayersAndTypeBlock);
