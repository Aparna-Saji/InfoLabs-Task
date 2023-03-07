import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { Home } from "./features/home";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    )
}

const AppStack = createNativeStackNavigator();

const AppStackNavigator = () => {
    return (
        <AppStack.Navigator screenOptions={{headerShown:false}}>
            <AppStack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
        </AppStack.Navigator>
    
  )
}

export default AppStackNavigator

