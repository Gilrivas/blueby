import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import NewsScreen from '../screens/NewsScreen/NewsScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';

const Tab = createBottomTabNavigator();

const AppStack = () => {
 
    return (
   
        <Tab.Navigator screenOptions={{headerShown: false}}>
            
           <Tab.Screen name="Home" component={HomeScreen} />
           <Tab.Screen name="Profil" component={ProfileScreen} />
           <Tab.Screen name="News" component={NewsScreen} />
           <Tab.Screen name="Chat" component={ChatScreen} />
           
  
        </Tab.Navigator>
      
    )
  }
  
  


export default AppStack