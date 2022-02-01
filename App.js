import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Components
import LoginOrSignup from './Screens/LoginOrSignup';
import Home from './Screens/Home';
import DiseaseDetection from './Screens/DiseaseDetection';
import NewsPage from './Screens/NewsPage';

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >   
          <Stack.Screen
            name="NewsPage"
            component={NewsPage}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name = "Disease"
            component = {DiseaseDetection}
          />
          <Stack.Screen
            name="LoginSignup"
            component={LoginOrSignup}
          />
          
      </Stack.Navigator>
    </NavigationContainer>
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
