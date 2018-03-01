import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

import { updateSearchFilter } from './actions';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';
import { SCREEN_HEIGHT } from '../../components/common/CustomHeader/navBarStyles';


class DateOptionsBlock extends Component {
  render() {
    const { formLabelStyle, datePickerCustomStyle, datePickerStyle } = styles;
    const { startDate, startTime, updateSearchFilter } = this.props;
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.25, justifyContent: 'space-around' }}>
        <Text style={formLabelStyle}>КОГДА{' '}
          <Text style={[formLabelStyle, { color: '#d4ff32' }]}>{'ОТ '}{moment(startDate).format('DD/MM/YY')}</Text>
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
            date={startDate}
            mode="date"
            placeholder="select date"
            format="DD MMM YYYY"
            minDate={moment().format('DD/MMM/YYYY')}
            maxDate={moment().endOf('year').format('DD/MMM/YYYY')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={(value) => updateSearchFilter('startDate', value)}
            androidMode="spinner"
          />
          <DatePicker
            style={datePickerStyle}
            date={startTime}
            mode="time"
            placeholder="select date"
            format="HH mm"
            minDate="0 00"
            maxDate="23 59"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            onDateChange={(value) => updateSearchFilter('startTime', value)}
            androidMode="spinner"
          />
        </Row>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  startTime: state.searchFilter.startTime,
  startDate: state.searchFilter.startDate
});

export default connect(mapStateToProps, { updateSearchFilter })(DateOptionsBlock);
