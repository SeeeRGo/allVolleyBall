import React, { Component } from 'react';
import { Router, Scene, Lightbox, Actions } from 'react-native-router-flux';
import get from 'lodash/get';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Profile from './scenes/Profile';
import ProfileForm from './scenes/ProfileForm';
import GameScreen from './scenes/Game/GameScreen';
import GameForm from './scenes/Game/GameForm';
import GameList from './scenes/Game/GameList';
import SearchScreen from './scenes/Search';
import FeedScreen from './scenes/Feed';
import MyGamesScreen from './scenes/Feed/MyGames';
import MyGymsScreen from './scenes/Feed/MyGyms';
import GymForm from './scenes/Gym/GymForm';
import WelcomeScreen from './scenes/Welcome';
import PhoneConfirmationScreen from './scenes/PhoneConfirmation';
import Chat from './scenes/Chat';
import Map from './scenes/Map';

export default class App extends Component {
  onBackPress = () => {
    if (get(Actions, 'state.routes.0.index', 0) !== 0) {
      Actions.pop();
    }
    return true;
  }

  render() {
    return (
      <Router backAndroidHandler={this.onBackPress}>
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
              path=":id/feed"
              component={FeedScreen}
            />
            <Scene
              hideNavBar
              key="MyGames"
              path=":id/feed/my-games"
              component={MyGamesScreen}
            />
            <Scene
              hideNavBar
              key="MyGyms"
              path=":id/feed/my-gyms"
              component={MyGymsScreen}
            />
            <Scene
              hideNavBar
              key="GymForm"
              path="/gym/:id/edit"
              component={GymForm}
            />
            <Scene
              hideNavBar
              key="Chat"
              path="/game/:id/chat"
              component={Chat}
            />
            <Scene
              hideNavBar
              key="Map"
              path="/map"
              component={Map}
            />
          </Scene>
        </Lightbox>
      </Router>
    );
  }
}
