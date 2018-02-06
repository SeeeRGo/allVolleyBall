import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';

class EmptyFeed extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex})
  }
  render() {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex } = this.state

    return (
      <Background>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[styles.textStyle, {marginBottom: 20}]}>К сожалению,{'\n'}в вашей ленте пока ничего нет</Text>
          <Row>
            <Text style={[styles.textStyle]}>Для начала воспользуйтесь поиском{' '}</Text>
            <Icon 
              name="search"
              type="font-awesome"
              color="white"
              size={12}
            />
            <Text style={[styles.textStyle]}>{','}</Text>
          </Row>
          <Text style={[styles.textStyle]}>чтобы найти подходящую игру, зал{'\n'}или создайте свои</Text>
        </View>
        <Row extraStyles={{ justifyContent: 'space-around', flex: 1, position: 'absolute', bottom: 100 }}>
          <Row extraStyles={{ justifyContent: 'center', flex: 1 }}>
            <Text style={{textAlign: 'center',  margin: 10, marginLeft: 0, alignSelf: 'center' }}>СОЗДАТЬ ЗАЛ</Text>
            <Icon 
              name="building"
              type="font-awesome"
            />
          </Row>
          <Row extraStyles={{ justifyContent: 'center', flex: 1 }}>
            <Text style={{textAlign: 'center',  margin: 10, alignSelf: 'center'}}>СОЗДАТЬ ИГРУ</Text>
            <Icon 
              name="soccer-ball-o"
              type="font-awesome"
            />
          </Row>
        </Row>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100, width: '100%', position: 'absolute', bottom: 0, marginBottom: 0}} />
      </Background>
    );
  }
}

const component1 = () => (
  <View>
    <Icon
      name="feed"
      type="font-awesome"
    />
    <Text>МОЯ ЛЕНТА</Text>
  </View>
)
const component2 = () => (
  <View>
    <Icon
      name="soccer-ball-o"
      type="font-awesome"
    />
    <Text>МОИ ИГРЫ</Text>
  </View>
)
const component3 = () => (
  <View>
    <Icon
      name="building"
      type="font-awesome"
    />
    <Text>МОИ ЗАЛЫ</Text>
  </View>
)

const styles = {
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
}

export default EmptyFeed;