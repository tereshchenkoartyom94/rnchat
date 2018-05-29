import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../Feed/index';
import Me from '../Me/index';
import MessageDetails from '../MessageDetails';
import FeedDetails from '../FeedDetails';
import ModalScreen from '../Modal';
import LoginScreen from '../Login';
import RegisterScreen from '../Register';

export const GuestStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  }
}, {
  initialRoute: 'Login',
});

export const FeedStack = createStackNavigator({
  MessageDetails: {
    screen: MessageDetails,
    navigationOptions: {
      title: 'MessageDetails',
    },
  },
  FeedDetails: {
    screen: FeedDetails,
    navigationOptions: {
      title: 'Feed',
    },
  },
});

export const Tabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="mail" size={35} color={tintColor} />
    },
  },
});

export const AppNavigation = createSwitchNavigator({
  Main: {
    screen: Tabs,
  },
  Modal: {
    screen: ModalScreen,
  },
  Guest: {
    screen: GuestStack,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});
