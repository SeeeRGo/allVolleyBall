import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';

class DateOptionsBlock extends Component {
  render() {
    const { formLabelStyle, datepickerCustomStyle, datePickerStyle } = styles;
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>КОГДА{' '}
          <Text style={{ color: 'yellow'}}>{'ОТ '}{moment().format('DD/MM/YY')}</Text>
        </Text>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <Icon
            name="calendar"
            type="font-awesome"
          />
          <Icon
            name="clock-o"
            type="font-awesome"
          />
        </Row>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <DatePicker
            style={datePickerStyle}
            date="12:00"
            mode="date"
            placeholder="select date"
            format="DD/MMM/YYYY"
            minDate={moment().format('DD/MMM/YYYY')}
            maxDate={moment().endOf('year').format('DD/MMM/YYYY')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datepickerCustomStyle}
            onDateChange={() => {}}
            androidMode="spinner"
          />
          <DatePicker
            style={datePickerStyle}
            date="12:00"
            mode="time"
            placeholder="select date"
            format="HH:mm"
            minDate="0:00"
            maxDate="23:59"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datepickerCustomStyle}
            onDateChange={() => {}}
          />
        </Row>
      </View>
    )
  }
}

export default DateOptionsBlock;