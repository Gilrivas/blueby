import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/signupscreen/SignUpScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignUpScreen} />
       
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator




  
