import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Components
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
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
