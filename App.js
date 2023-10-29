import { View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';

import { NavigationContainer } from '@react-navigation/native';
import Roots from './Navigation/Roots';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Roots />
      </NavigationContainer>
    </Provider>
  );
}
