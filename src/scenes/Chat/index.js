import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { GiftedChat, Bubble, Send, InputToolbar, Composer } from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';

import Background from '../../components/common/Background';
import Row from '../../components/common/Row';
import { SCREEN_HEIGHT } from '../../styles';
import { SCREEN_WIDTH } from '../../components/common/CustomHeader/navBarStyles';
import CircledNumber from '../../components/common/Svg/CircledNumber';

class Chat extends Component {
  constructor(props) {
    super(props);
  
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient('http://localhost:3010');
  }

  state = {
    messages: []
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://media.forgecdn.net/avatars/124/768/636424778749237239.jpeg'
          }
        }
      ]
    });
  }

  componentDidMount() {
    this.socket.emit('connectToGame', JSON.stringify({id: 1}));
    this.socket.emit('game-1', JSON.stringify({text: 'test'}));
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }
  renderComposer = (props) => (
    <Composer
      {...this.props}
    />
  )
  renderInputToolbar = (props) => (
    <InputToolbar {...props}>
      <Icon
        name="camera"
        type="font-awesome"
        color="white"
        containerStyle={{ marginLeft: 7, marginRight: 7, height: 35 }}
      />
      {this.renderComposer(this.props)}
      {this.renderSend(this.props)}
    </InputToolbar>
  )
  renderSend = (props) => (
    <Send {...props}>
      <View style={{
        backgroundColor: '#2f4e99', height: '100%', width: 40, alignItems: 'center', justifyContent: 'center'
      }}
      >
        <Icon
          name="send"
          type="font-awesome"
          color="white"
          containerStyle={{ marginTop: 0, marginBottom: 0 }}
        />
      </View>
    </Send>
  )
  renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: 'rgba(255,255,255,0.2)'
        },
        right: {
          backgroundColor: '#00bfb1'
        }
      }}
      textProps={{ style: { color: 'white' } }}
    />
  )
  render() {
    return (
      <Background>
        <GiftedChat
          style={{
            height: 35, width: '60%', backgroundColor: 'white', marginTop: 7, marginBottom: 7, borderRadius: 10
          }}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          renderBubble={this.renderBubble}
          renderSend={this.renderSend}
          renderInputToolbar={this.renderInputToolbar}
          renderAvatarOnTop
          listViewProps={{ style: { backgroundColor: 'transparent', height: SCREEN_HEIGHT, width: SCREEN_WIDTH } }}
          user={{
            _id: 1
          }}
        />
      </Background>
    );
  }
}

export default Chat;
