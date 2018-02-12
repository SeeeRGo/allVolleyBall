import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Svg, { Rect, Defs, LinearGradient, Stop, Ellipse } from 'react-native-svg';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import SvgShadow from '../../components/common/SvgShadow';
import styles from './styles';
import { SCREEN_HEIGHT } from '../../components/common/CustomHeader/navBarStyles';


class DateOptionsBlock extends Component {
  render() {
    const { formLabelStyle, datePickerCustomStyle, datePickerStyle } = styles;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.25, justifyContent: 'space-around' }}>
        <Text style={formLabelStyle}>КОГДА{' '}
          <Text style={[formLabelStyle, { color: '#d4ff32' }]}>{'ОТ '}{moment().format('DD/MM/YY')}</Text>
        </Text>
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
            date={moment().format('DD MMM YYYY')}
            mode="date"
            placeholder="select date"
            format="DD MMM YYYY"
            minDate={moment().format('DD/MMM/YYYY')}
            maxDate={moment().endOf('year').format('DD/MMM/YYYY')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={() => {}}
            androidMode="spinner"
          />
          <DatePicker
            style={datePickerStyle}
            date="12 00"
            mode="time"
            placeholder="select date"
            format="HH mm"
            minDate="0 00"
            maxDate="23 59"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={() => {}}
            androidMode="spinner"
          />
        </Row>
        <SvgShadow />
      </View>
    );
  }
}

export default DateOptionsBlock;
