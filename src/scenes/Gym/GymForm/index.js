import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { createGym } from '../GymScreen/actions';
import AddressBlock from './AddressBlock';
import QualificationsBlock from './QualificationsBlock';
import GalleryBlock from './GalleryBlock';
import AdminBlock from './AdminBlock';
import Background from '../../../components/common/Background';
import CustomHeader from '../../../components/common/CustomHeader';
import navBarStyles from '../../../components/common/CustomHeader/navBarStyles';
import { SCREEN_HEIGHT } from '../../../styles';

class GymForm extends Component {
  handleCreateGym = () => {
    this.props.createGym(this.props.formData);
    Actions.push('Feed');
  }
  render() {
    return (
      <Background>
        <CustomHeader
          title="Новый зал"
          rightIcon={
            <Icon
              name="close"
              type="font-awesome"
              color="white"
              containerStyle={navBarStyles.rightIconStyles}
              onPress={() => Actions.push('Feed')}
            />
          }
        />
        <ScrollView style={{ bottom: 5, top: 5, maxHeight: SCREEN_HEIGHT - 120 }}>
          <AddressBlock />
          <QualificationsBlock />
          <GalleryBlock />
          <AdminBlock />
        </ScrollView>
        <Button
          containerViewStyle={{ position: 'absolute', bottom: 0, width: '100%' }}
          title={this.props.actionType === 'create' ? 'СОЗДАТЬ ЗАЛ' : 'РЕДАКТИРОВАТЬ ЗАЛ'}
          buttonStyle={{ backgroundColor: '#00bfb1' }}
          onPress={this.handleCreateGym}
        />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  formData: state.gymForm
});

export default connect(mapStateToProps, { createGym })(GymForm);
