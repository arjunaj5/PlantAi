import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Components
import Header from './Components/Header';
import LoginOrSignup from './Screens/LoginOrSignup';
import Home from './Screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LoginOrSignup /> */}
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3FFD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
