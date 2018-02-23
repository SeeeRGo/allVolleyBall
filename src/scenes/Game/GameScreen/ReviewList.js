import React, { Component } from 'react';
import { View } from 'react-native';

class ReviewList extends Component {
  render() {
    return (
      <View>
        {this.props.reviews.map((review) => (
          <View>
            <Row>
              <Text>Review</Text>
            </Row>
          </View>
        ))}
      </View>
    );
  }
}

export default ReviewList;
