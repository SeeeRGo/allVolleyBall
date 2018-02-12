import React, { Component } from 'react';
import { View, Text, Slider, Dimensions, FlatList } from 'react-native';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class SportOptionsBlock extends Component {
  render() {
    return (
      <View>
        <Row extraStyles={{ width: SCREEN_WIDTH * 0.5, justifyContent: 'center', elevation: 5 }}>
          <Text>ИГРА</Text>
          <Slider
            value={0}
            minimumValue={0}
            maximumValue={1}
            step={1}
            style={{ minWidth: 40, maxHeight: 50 }}
            thumbTouchSize={{ width: 20, height: 20 }}

            thumbStyle={{
 width: 15, height: 15, marginBottom: 0, marginTop: 0
 }}
            onValueChange={(value) => {}}
          />
          <Text>ЗАЛ</Text>
        </Row>
        <FlatList
          horizontal
          style={{ maxHeight: 20 }}
          data={['А', 'Б']}
          renderItem={({ item }) => <Text key={`${item} `}>{item}</Text>}
        />
        <FlatList
          horizontal
          style={{ maxHeight: 70 }}
          data={['А', 'Б']}
          renderItem={({ item }) => <Text key={`${item }   `}>{item}</Text>}
        />
      </View>
    );
  }
}

export default SportOptionsBlock;
