import React, { Component } from 'react';
import { Router, Scene, Lightbox } from 'react-native-router-flux';

import { View, Text } from 'react-native';
import Login from './scenes/Login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Scene
              hideNavBar
              key="Auth"
              initial
              component={Login}
            />
            <Scene
              hideNavBar
              key="Dashboard"
              component={() => (<View><Text>asd</Text></View>)}
            />
            <Scene
              hideNavBar
              key="Dashboard12"
              component={() => (<View><Text>qwe</Text></View>)}
            />
          </Scene>
        </Lightbox>
      </Router>
    );
  }
}
