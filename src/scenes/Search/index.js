import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

import { findGames } from './actions';
import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import CustomHeader from '../../components/common/CustomHeader';
import SvgShadow from '../../components/common/Svg/SvgShadow';
import LocationOptionsBlock from './LocationOptionsBlock';
import SportOptionsBlock from './SportOptionsBlock';
import GameTypeOptionsBlock from './GameTypeOptionsBlock';
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
              onPress={() => Actions.push('Signup')}
            />
          }
        />
        <SvgShadow dark />
        <LocationOptionsBlock />
        <SvgShadow />
        <SportOptionsBlock />
        <SvgShadow dark />
        <GameTypeOptionsBlock />
        <SvgShadow />
        <DateOptionsBlock />
        <SvgShadow dark />
        <PriceOptionsBlock bgColor="rgba(0,0,0, 0.25)" use="searchFilter" />
        <SvgShadow />
        <Button
          containerViewStyle={{
            width: '100%', position: 'absolute', bottom: 0, marginBottom: 0
          }}
          title="НАЙТИ"
          buttonStyle={{ backgroundColor: '#00bfb1' }}
          onPress={async () => {
            await this.props.findGames(this.props.filter);
            Actions.push('GameList');
          }}
        />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: {
    // city: state.searchFilter.city,
    kindOfSportsId: state.searchFilter.kindOfSportId + 1,
    cost: state.searchFilter.price,
    startTime: moment((`${state.searchFilter.startDate} ${state.searchFilter.startTime}`), 'DD MMM YYYY HH mm').toISOString()
  }
});

export default connect(mapStateToProps, { findGames })(SearchScene);
