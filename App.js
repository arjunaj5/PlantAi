import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Components
import LoginOrSignup from './Screens/LoginOrSignup';
import Home from './Screens/Home';
import HealthyPlantResult from './Screens/HealthyPlantResult';
import DiseaseDetection from './Screens/DiseaseDetection';
import NewsPage from './Screens/NewsPage';
import PlantPage from './Screens/PlantPage';
import ResultsPage from './Screens/ResultsPage';
import SearchPage from './Screens/SearchPage';

import UserDashboard from './Screens/UserDashboard'

export default function App() {
 
  return (
   
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >   
          <Stack.Screen
            name="Home"
            component={Home}
          />
          
          <Stack.Screen
            name='UserDashboard'
            component={UserDashboard}
            />

          <Stack.Screen
            name='SearchPage'
            component={SearchPage}
          />
          <Stack.Screen
            name = "Disease"
            component = {DiseaseDetection}
          />
          <Stack.Screen
            name='HealthyPlantResult'
            component={HealthyPlantResult}
          />
          <Stack.Screen 
          name="ResultsPage"
          component={ResultsPage}
          />
          <Stack.Screen
          name="PlantPage"
          component={PlantPage}
          />
          <Stack.Screen
            name="NewsPage"
            component={NewsPage}
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
