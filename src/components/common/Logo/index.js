import React from 'react';
import { Image } from 'react-native';

const logoStyle = {
  width: 50,
  height: 50
};

export default () => (
  <Image
    style={logoStyle}
    source={{ uri: 'https://i.pinimg.com/736x/58/a2/90/58a2908ac9963eefc854e1a56fa2e31f--volleyball-cake-ideas-volleyball-birthday-cakes.jpg' }}
  />
);

