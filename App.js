import * as React from 'react';
import {StyleSheet, StatusBar } from 'react-native';

import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/Navigation/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    marginTop:StatusBar.currentHeight,
   backgroundColor:' black',
  },
});




