import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();



import SplashScreen from './Stack/SplashScreen'

import Tabs from './Stack/Tabs';


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
AppRegistry.registerComponent('RadioJ', () => App)


