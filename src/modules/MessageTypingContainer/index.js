import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import MessageButton from '../buttons/MessageButton';

import { styles } from './styles';

class MessageTypingContainer extends PureComponent {
  static propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  };

  message = '';

  onTextChange = message => {
    this.setState({ message });
  };

  onMessageButtonPress = () => {
    const { onMessageSend } = this.props;

    onMessageSend(this.state.message)
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={this.onTextChange} style={styles.textInput} />
        <MessageButton onPress={this.onMessageButtonPress} />
      </View>
    );
  }
}

export default MessageTypingContainer;
