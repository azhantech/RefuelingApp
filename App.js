/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import Navigation from './src/Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/store';
import FlashMessage from 'react-native-flash-message';
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} />
          <Navigation />
        </View>
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}

export default App;
