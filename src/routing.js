import React, { Component } from 'react';
import { Router, Scene, Lightbox, Actions } from 'react-native-router-flux';

import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Profile from './scenes/Profile';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Scene
              hideNavBar
              key="Auth"
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
            <Scene
              title="Я - новенький"
              hideNavBar
              key="Signup"
              component={Signup}
            />
            <Scene
              title="Вячеслав Мельников"
              navTransparent
              initial
              key="Profile"
              path="/profile/:id"
              onRight={() => Actions.ProfileForm()}
              rightTitle="Cog"
              component={Profile}
            />
          </Scene>
        </Lightbox>
      </Router>
    );
  }
}
