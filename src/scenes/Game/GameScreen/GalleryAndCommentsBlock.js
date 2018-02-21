import React, { Component } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import axios from 'axios';

class GalleryAndCommentsBlock extends Component {
  renderItem = (item) => (
    <Image
      style={{ width: 20, height: 20 }}
      source={{ uri: `http://10.0.3.2:3010/api/${item.link}` }}
    />
  );
  render() {
    console.log(this.props.files);
    return (
      <View>
        <Text>Gallery</Text>
        {this.props.files.map((file) => (
          <Image
            style={{ width: 20, height: 20 }}
            source={{ uri: 'http://10.0.3.2:3010/download/img-1519033255928uuid-7c7fc671-02e2-4dfa-b2b3-e46223748b98.jpeg' }}
          />
        ))}
      </View>
    );
  }
}

export default GalleryAndCommentsBlock;
