import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Row from '../../../components/common/Row';

class GameSearchHeader extends Component {
  render() {
    return (
      <Row>
        <Text style={{ flex: 1, marginLeft: 10 }}>НАЙДЕНО{' '}
          <Text style={{ color: 'yellow' }}>25</Text>
        </Text>
        <Row extraStyles={{ flex: 2, marginRight: 10, justifyContent: 'space-around' }}>
          <Row>
            <Text>ПО ЦЕНЕ</Text>
            <Icon
              name="long-arrow-down"
              type="font-awesome"
              color="white"
            />
          </Row>
          <Row>
            <Text>ПО ДАТЕ</Text>
            <Icon
              name="long-arrow-down"
              type="font-awesome"
              color="white"
            />
          </Row>
          <Icon
            name="th-list"
            type="font-awesome"
            color="white"
          />
          <Icon
            name="th"
            type="font-awesome"
            color="white"
          />
        </Row>
      </Row>
    );
  }
}

export default GameSearchHeader;
