import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, View,
  Button
} from 'react-native';

import { logIn } from '../index';

class LoginScreen extends Component {
  render() {
    return <View>
      <Text>
        Login Screen
      </Text>
      <Button
        onPress={() => {
          this.props.logIn();
          this.props.navigation.navigate('Main');
        }}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          this.props.navigation.navigate('Register');
        }}
        title="Register"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  }
}

const mapDispatchToProps = {
  logIn,
};

export default connect(undefined, mapDispatchToProps)(LoginScreen);



