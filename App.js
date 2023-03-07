import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './app/AppNavigator';


const App = () => {
  return (
  <NavigationContainer>
    <AppStackNavigator/>
  </NavigationContainer>
  
  )
}

export default App

