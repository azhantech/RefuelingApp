/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import Navigation from './src/Navigation'
function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </View>
  );
}

export default App;
