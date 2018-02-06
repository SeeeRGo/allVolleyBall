import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import LocationOptionsBlock from './LocationOptionsBlock';
import SportOptionsBlock from './SportOptionsBlock';
import SportTypeOptionsBlock from './SportTypeOptionsBlock';
import DateOptionsBlock from './DateOptionsBlock';
import PriceOptionsBlock from './PriceOptionsBlock';

class SearchScene extends Component {
  render() {
    return (
      <Background>
        <LocationOptionsBlock />
        <SportOptionsBlock />
        <SportTypeOptionsBlock />
        <DateOptionsBlock />
        <PriceOptionsBlock />
        <Button containerViewStyle={{ width: '100%', position: 'absolute', bottom: 0, marginBottom: 0}} title="НАЙТИ"/>
      </Background>
    );
  }
}

export default SearchScene;
