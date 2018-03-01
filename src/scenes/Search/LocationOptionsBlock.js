import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions, Picker } from 'react-native';
import { Slider, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { updateSearchFilter } from './actions';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import styles from './styles';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const cityOrDistrict = [
  'city',
  'district'
];

const cities = [
  'Тольятти',
  'Москва',
  'Санкт-Петербург'
];

class LocationOptionsBlock extends Component {
  renderPicker(fieldName, itemList) {
    return (
      <Picker
        style={{
          flex: 1, height: 30, alignItems: 'flex-end', color: 'white'
        }}
        selectedValue={this.props[fieldName]}
        onValueChange={(value) => this.props.updateSearchFilter(fieldName, value)}
      >
        {itemList.map((item) => <Picker.Item key={item} label={item} value={item} />)}
      </Picker>
    );
  }
  render() {
    const { formLabelStyle } = styles;
    const { updateSearchFilter, city } = this.props;
    return (
      <View style={{
        width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.14, backgroundColor: 'rgba(0,0,0, 0.25)'
      }}
      >
        <Row extraStyles={{
          width: SCREEN_WIDTH * 0.75, justifyContent: 'space-around', alignItems: 'center', marginTop: 10, marginBottom: 10
        }}
        >
          <Text style={[formLabelStyle, { width: SCREEN_WIDTH * 0.25, textAlign: 'center' }]}>МОЙ ГОРОД</Text>
          <Row extraStyles={{ width: SCREEN_WIDTH * 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={formLabelStyle}>ГОРОД</Text>
            <Slider
              value={0}
              minimumValue={0}
              maximumValue={1}
              step={1}
              style={{
                minWidth: 35, maxHeight: 50, marginLeft: 20, marginRight: 20
              }}
              thumbTouchSize={{ width: 20, height: 20 }}
              minimumTrackTintColor="rgba(255, 255, 255, 0.5)"
              maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
              thumbTintColor="white"
              trackStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 7 }}
              thumbStyle={{
                width: 15, height: 15, marginBottom: 0, marginTop: 0
              }}
              onValueChange={(value) => updateSearchFilter('cityOrDistrict', cityOrDistrict[value])}
            />
            <Text style={formLabelStyle}>РАЙОН</Text>
          </Row>
        </Row>
        <Row extraStyles={{ justifyContent: 'space-around' }}>
          <Text style={[formLabelStyle, { width: SCREEN_WIDTH * 0.25, textAlign: 'center' }]}>{city.toUpperCase()}</Text>
          <Row extraStyles={{ flex: 1 }}>
            {this.renderPicker('city', cities)}
            <Icon
              name="angle-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
          <Text
            style={[formLabelStyle, {
              width: SCREEN_WIDTH * 0.25, textAlign: 'center', color: 'yellow', alignSelf: 'flex-end'
            }]}
            onPress={() => Actions.push('Map', {
              onAddressSubmit: updateSearchFilter,
              addressUseType: 'city',
              resultType: 'locality',
              resultPath: 'data.results[0].address_components[0].long_name'
            })}
          >
            ВЫБРАТЬ
          </Text>
        </Row>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cityOrDistrict: state.searchFilter.cityOrDistrict,
  city: state.searchFilter.city
});

export default connect(mapStateToProps, { updateSearchFilter })(LocationOptionsBlock);
