import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import MessagesContainer from '../MessagesContainer';
import MessageTypingContainer from '../MessageTypingContainer';
import pushMessage from '../index';

class Chat extends Component {
  render() {
    return <View>
      <MessagesContainer messages={this.props.messages} />
      <MessageTypingContainer onMessageSend={pushMessage} />
    </View>
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
