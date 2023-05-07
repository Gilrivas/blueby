import * as React from 'react';
import {StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Navigator from './src/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>

      <Navigator />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    marginTop:StatusBar.currentHeight,
   backgroundColor:' black',
  },
});




