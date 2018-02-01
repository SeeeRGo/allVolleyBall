import React, { Component } from 'react';
import { Router, Scene, Lightbox, Actions } from 'react-native-router-flux';

import { View, Text } from 'react-native';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Profile from './scenes/Profile';
import ProfileForm from './scenes/ProfileForm';
import GameScreen from './scenes/Game/GameScreen';
import GameForm from './scenes/Game/GameForm';

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
              key="Profile"
              path="/profile/:id"
              onRight={() => Actions.replace('ProfileForm')}
              rightTitle="Cog"
              component={Profile}
            />
            <Scene
              title="Настройки профиля"
              navTransparent
              init
              key="ProfileForm"
              path="/profile/:id/edit"
              component={ProfileForm}
              onRight={() => Actions.replace('Profile')}
              rightTitle="X"
            />
            <Scene
              title="Создание игры"
              navTransparent
              initial
              key="GameForm"
              path="/game/:id/edit"
              component={GameForm}
              onRight={() => Actions.replace('GameScreen')}
              rightTitle="X"
            />
            <Scene
              title="Игра от "
              navTransparent
              key="GameScreen"
              path="/game/:id/edit"
              component={GameScreen}
              onRight={() => Actions.replace('GameForm')}
              rightTitle="X"
            />
          </Scene>
        </Lightbox>
      </Router>
    );
  }
}
