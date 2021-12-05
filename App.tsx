import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import { Navigator } from './src/navigator/navigator';
import { Tabs } from './src/navigator/Tabs';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator/> */}
      <Tabs/>
    </NavigationContainer>
  )
}
