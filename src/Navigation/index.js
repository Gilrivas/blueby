import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import SignUpScreen from '../screens/signupscreen/SignUpScreen';
import SingInScreen from '../screens/signinscreen/SingInScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SingInScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator




  
