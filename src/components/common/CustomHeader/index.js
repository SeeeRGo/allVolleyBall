import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Row from '../Row';
import { SCREEN_WIDTH } from '../../../styles';

const BackButton = () => (
  <Icon
    name="angle-left"
    type="font-awesome"
    containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
  />
);
const LeftComponent = () => (
  <Text>3 игры</Text>
);

const title = 'Личный кабинет';

const IconRight = () => (
  <Icon
    name="cog"
    type="font-awesome"
    containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
  />
);

class CustomHeader extends Component {
  render() {
    return (
      <View style={{
        maxHeight: 30, flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 5
      }}
      >
        <Row extraStyles={{ width: SCREEN_WIDTH, justifyContent: 'space-between' }}>
          <Row extraStyles={{ flex: 0.25 }}>
            <BackButton />
            <LeftComponent />
          </Row>
          <Text style={{ position: 'absolute', left: SCREEN_WIDTH * 0.25, textAlign: 'center' }}>{title}</Text>
          <IconRight style={{ flex: 0.25 }} />
        </Row>
      </View>
    );
  }
}

export default CustomHeader;
