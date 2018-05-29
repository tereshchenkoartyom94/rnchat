import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import MessageContent from '../../modules/Message';

import { styles } from './styles';

class MesssageContainer extends PureComponent {
  static propTypes = {
    messages: PropTypes.array.isRequired,
  };

  renderMessage = message => {
    return <View style={styles.separator}><MessageContent text={message.item} /></View>
  };

  render() {

    return <View style={styles.container}>
      <FlatList renderItem={this.renderMessage} data={this.props.messages} />
    </View>
  }
}

export default MesssageContainer;




