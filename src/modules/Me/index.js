import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import MessageContent from '../Message';
import { messageTypes } from '../constants/messageTypes';
import MessageTypingContainer from '../MessageTypingContainer';
import MessagesContainer from '../MessagesContainer'
import Chat from '../Chat';

import { styles } from './styles';

class Me extends Component {
  render() {

    return <ScrollView contentContainerStyles={styles.container}>
      <Chat/>
      </ScrollView>
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(Me);
