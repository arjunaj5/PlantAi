import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Components
import LoginOrSignup from './Screens/LoginOrSignup';
import Home from './Screens/Home';
import Result from './Screens/PlantResult';






export default function App() {
 
  return (
   

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
         <Stack.Screen
      name="PlantResult"
      component={Result}
      />

        <Stack.Screen
          name="LoginSignup"
          component={LoginOrSignup}
        />
        
        <Stack.Screen
          name="Home"
          component={Home}
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
