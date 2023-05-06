import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/screens/signupscreen/SignUpScreen';
import WelcomeScreen from './src/screens/welcomescreen/WelcomeScreen';
/* import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; *






/* function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home!</Text>
    </View>
  );
}
function Trending() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
    </View>
  );
}
function FavScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
 */
export default function App() {
  return (
    <SafeAreaView style={styles.root}>

      <WelcomeScreen />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
  },
});




  {/*   <Tab.Navigator screenOptions={{tabBarShowLabel: false } }  >
        <Tab.Screen name="Home"  component={HomeScreen} />
        <Tab.Screen name="Fav"  component={FavScreen} />
        <Tab.Screen name="Trending"  component={Trending} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator> */}