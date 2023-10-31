import * as React from 'react';
import TabNavigator from '../TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import AddRecords from '../../Screen/AddRecords';
import NavigationOptions from '../NavigationOptions';

function MainNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="TabNavigator"
        component={TabNavigator}
      />
      <Stack.Screen
        options={NavigationOptions}
        name="AddRecords"
        component={AddRecords}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
