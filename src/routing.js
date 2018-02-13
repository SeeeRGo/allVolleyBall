import React, { Component } from 'react';
import { Router, Scene, Lightbox, Actions } from 'react-native-router-flux';

import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Profile from './scenes/Profile';
import ProfileForm from './scenes/ProfileForm';
import GameScreen from './scenes/Game/GameScreen';
import GameForm from './scenes/Game/GameForm';
import GameList from './scenes/Game/GameList';
import SearchScreen from './scenes/Search';
import FeedScreen from './scenes/Feed';
import WelcomeScreen from './scenes/Welcome';
import PhoneConfirmationScreen from './scenes/PhoneConfirmation';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Scene
              hideNavBar
              key="Welcome"
              path="/"
              component={WelcomeScreen}
            />
            <Scene
              hideNavBar
              key="Auth"
              component={Login}
            />
            <Scene
              hideNavBar
              key="Signup"
              component={Signup}
            />
            <Scene
              hideNavBar
              key="PhoneConfirmation"
              component={PhoneConfirmationScreen}
            />
            <Scene
              hideNavBar
              key="Profile"
              path="/profile/:id"
              component={Profile}
            />
            <Scene
              hideNavBar
              key="ProfileForm"
              path="/profile/:id/edit"
              component={ProfileForm}
            />
            <Scene
              hideNavBar
              key="GameForm"
              initial
              path="/game/:id/edit"
              component={GameForm}
            />
            <Scene
              hideNavBar
              key="GameScreen"
              path="/game/:id"
              component={GameScreen}
            />
            <Scene
              hideNavBar
              key="GameList"
              path="/games"
              component={GameList}
            />
            <Scene
              hideNavBar
              key="Search"
              path="/search"
              component={SearchScreen}
            />
            <Scene
              hideNavBar
              key="Feed"
              path="/feed"
              component={FeedScreen}
            />
          </Scene>
        </Lightbox>
      </Router>
    );
  }
}
