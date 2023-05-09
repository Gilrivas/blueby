import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack'
import AppStack from './AppStack';

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext)

    if( isLoading ) {
        <View style={styles.container}>
            <ActivityIndicator size={'large'}/>
        </View>
    }
    return (
        <NavigationContainer >

            {userToken !== null ? <AppStack /> : <AuthStack />}
          
        </NavigationContainer>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
     
    },

  });
  

export default AppNav