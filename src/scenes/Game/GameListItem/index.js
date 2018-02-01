import React, { Component } from 'react';
import { View, Dimensions, Text, Image } from 'react-native';
import { Rating, Icon } from 'react-native-elements';

import Row from '../../../helpers/Row';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class GameListItem extends Component {
  render() {
    return (
      <Row extraStyles={{
 height: 100, backgroundColor: 'white', elevation: 10, marginBottom: 10
 }}>
        <View style={{ width: SCREEN_WIDTH * 0.2, height: 100 }}>
          <Image
            style={{ width: SCREEN_WIDTH * 0.2, height: 80 }}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs7X0GOmJmaQhq0f6HQcuogHiRq-YuNOFKhy24GxmA30uUPGS' }}
          />
          <Rating
            imageSize={20}
            readonly
            startingValue={3}
            ratingCount={3}
            style={{ maxWidth: SCREEN_WIDTH * 0.2, alignSelf: 'center', flex: 1 }}
          />
        </View>
        <View style={{ width: SCREEN_WIDTH * 0.8, height: 100, backgroundColor: 'white' }}>
          <Row extraStyles={{ height: 25 }}>
            <Text style={[{ width: SCREEN_WIDTH * 0.21, backgroundColor: 'navy', color: 'white' }, styles.textStyle]}>19/07/18</Text>
            <Text style={[{ width: SCREEN_WIDTH * 0.1, backgroundColor: 'red', color: 'white' }, styles.textStyle]}>11:00</Text>
            <Text style={[{
 width: SCREEN_WIDTH * 0.21, color: 'navy', borderBottomWidth: 1, borderRightWidth: 1 
}, styles.textStyle]}>10:00-15:00</Text>
            <Text style={[{
 width: SCREEN_WIDTH * 0.14, color: 'red', borderBottomWidth: 1, borderRightWidth: 1 
}, styles.textStyle]}>6-12 чел</Text>
            <Text style={[{ width: SCREEN_WIDTH * 0.14, color: 'teal', borderBottomWidth: 1 }, styles.textStyle]}>0 р</Text>
          </Row>
          <Row extraStyles={{ height: 25 }}>
            <Icon
              size={12}
              name="user"
              type="font-awesome"
              color="grey"
              iconStyle={{ padding: 5 }}
            />
            <Text style={[styles.textStyle, styles.mainTextStyle]}>В. Андрейчук
            </Text>
            <Text style={styles.textStyle}> волейбол, классический</Text>
          </Row>
          <Row extraStyles={{ height: 25 }}>
            <Icon
              size={12}
              name="home"
              type="font-awesome"
              color="grey"
              iconStyle={{ padding: 5 }}
            />
            <Text style={styles.textStyle}>Степана Разина 89
            <Text> Школа №67</Text>
            </Text>
          </Row>
          <Row extraStyles={{ height: 25, justifyContent: 'space-around' }}>
            <Text style={styles.textStyle}>ЗАЯВКИ
            <Text style={{ color: 'navy' }}> 4</Text>
            </Text>
            <Text style={styles.textStyle}>СВОБОДНЫХ МЕСТ
            <Text style={{ color: 'navy' }}> 8</Text>
            </Text>
            <Row>
              <Icon
                size={12}
                name="comment"
                type="font-awesome"
                color="grey"
                iconStyle={{ paddingRight: 5 }}
              />
              <Text style={styles.textStyle}>10/
              <Text style={{ color: 'navy' }}>1</Text>
              </Text>
            </Row>
          </Row>
        </View>
      </Row>
    );
  }
}

const styles = {
  mainTextStyle: {
    fontWeight: 'bold',
    color: 'navy',
    fontSize: 14
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center'
  }
};

export default GameListItem;
