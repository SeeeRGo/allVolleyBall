import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Slider, Divider } from 'react-native-elements';

import Row from '../../../components/common/Row';
import styles from './styles';
import { gymFormUpdate } from './actions';

class QualificationSlider extends Component {
  static defaultProps = {
    value: 0
  }
  render() {
    const { formLabelStyle } = styles;
    const {
      fieldName, value, title, gymFormUpdate
    } = this.props;
    return (
      <View>
        <Row extraStyles={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={[formLabelStyle, { fontSize: 16 }]}>{title}</Text>
          <Row extraStyles={{ justifyContent: 'center', alignItems: 'center' }}>
            <Slider
              value={value}
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
              onSlidingComplete={(sliderValue) => gymFormUpdate(fieldName, sliderValue)}
            />
            <Text style={formLabelStyle}>{value ? 'ЕСТЬ' : 'НЕТ '}</Text>
          </Row>
        </Row>
        <Divider />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  value: state.gymForm[ownProps.fieldName]
});

export default connect(mapStateToProps, { gymFormUpdate })(QualificationSlider);
