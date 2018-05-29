import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { AppNavigation } from './src/modules/navigation/routes';
import configureStore from './src/modules/store/configureStore';

const store = configureStore();

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>

    );
  }
}
