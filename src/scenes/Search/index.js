import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import CustomHeader from '../../components/common/CustomHeader';
import LocationOptionsBlock from './LocationOptionsBlock';
import SportOptionsBlock from './SportOptionsBlock';
import SportTypeOptionsBlock from './SportTypeOptionsBlock';
import DateOptionsBlock from './DateOptionsBlock';
import PriceOptionsBlock from './PriceOptionsBlock';
import styles from './styles';
import navBarStyles from '../../components/common/CustomHeader/navBarStyles';

class SearchScene extends Component {
  render() {
    return (
      <Background>
        <CustomHeader
          title="Поиск"
          showBackButton
          rightIcon={
            <Icon
              name="undo"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.replace('Signup')}
            />
          }
        />
        <LocationOptionsBlock />
        <SportOptionsBlock />
        <SportTypeOptionsBlock />
        <DateOptionsBlock />
        <PriceOptionsBlock />
        <Button
          containerViewStyle={{
            width: '100%', position: 'absolute', bottom: 0, marginBottom: 0
          }}
          title="НАЙТИ"
          buttonStyle={{ backgroundColor: '#00bfb1' }}
        />
      </Background>
    );
  }
}

export default SearchScene;
