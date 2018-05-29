import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import { Icon, Button } from 'react-native-elements';

import {colors} from '../../constants/colors';


const MessageButton = (props) => {
  return <TouchableOpacity>
    <Icon name="mail" color={colors.primary}  size={30} />
  </TouchableOpacity>
};

MessageButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default MessageButton;



