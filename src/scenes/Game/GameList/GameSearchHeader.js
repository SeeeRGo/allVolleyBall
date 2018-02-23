import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { changeSelection } from '../../Feed/actions';
import Row from '../../../components/common/Row';
import styles from './styles';

class GameSearchHeader extends Component {
  render() {
    const { textStyle } = styles;
    const { numGamesFound, changeSelection } = this.props;
    return (
      <Row extraStyles={{ position: 'absolute', top: 40 }}>
        <Text style={[textStyle, { flex: 1, marginLeft: 10 }]}>НАЙДЕНО{' '}
          <Text style={[textStyle, { color: 'yellow' }]}>{numGamesFound}</Text>
        </Text>
        <Row extraStyles={{ flex: 2, marginRight: 10, justifyContent: 'space-around' }}>
          <Row>
            <Text style={textStyle}>ПО ЦЕНЕ</Text>
            <Icon
              name="long-arrow-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
          <Row>
            <Text style={textStyle}>ПО ДАТЕ</Text>
            <Icon
              name="long-arrow-down"
              type="font-awesome"
              color="white"
              containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            />
          </Row>
          <Icon
            name="th-list"
            type="font-awesome"
            color="white"
            containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            onPress={() => changeSelection('gameListItemDisplay', 0)}
          />
          <Icon
            name="th"
            type="font-awesome"
            color="white"
            containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
            onPress={() => changeSelection('gameListItemDisplay', 1)}
          />
        </Row>
      </Row>
    );
  }
}

export default connect(null, { changeSelection })(GameSearchHeader);
