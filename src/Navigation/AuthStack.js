import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';



const Stack = createStackNavigator();

const AuthStack = () => {

  return (
   
      <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={LoginScreen} />
         
       
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        
        
      </Stack.Navigator>
    
  )
}


export default AuthStack




  
