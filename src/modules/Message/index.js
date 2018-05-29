import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { messageTypes } from '../constants/messageTypes';
import { styles } from './styles';

class MessageContent extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([...messageTypes])
  };

  static defaultProps = {
    type: messageTypes.inbox,
  };


  render() {
    const { text, type } = this.props;
    const containerStyles = type === messageTypes.inbox ? styles.inboxContainer : undefined;
    const textStyles = type === messageTypes.inbox ? styles.inboxText : undefined;

    return <View style={[styles.container, containerStyles]}>
      <Text style={textStyles}>
        {text}
      </Text>
    </View>
  }
}

export default MessageContent;
