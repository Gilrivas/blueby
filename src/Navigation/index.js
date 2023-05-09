import { StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import SingInScreen from '../screens/SignInScreen/SignInScreen';
import HomeScreen from '../screens/Home/HomeScreen';


const Stack = createStackNavigator();

const Navigator = ({authToken}) => {

  return (
    <NavigationContainer style={styles.root}>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        {authToken ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SingInScreen} />
          </>
        )}


        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root:{
  
    
  },
});

export default Navigator




  
