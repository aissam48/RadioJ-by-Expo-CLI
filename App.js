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


function storeRedux(state = { isPlaying: false }, action) {
  switch (action.type) {
    case 'startRadio': {
      return {
        ...state,
        isPlaying: true
      }
    }

    case 'stopRadio': {
      return {
        ...state,
        isPlaying: false
      }
    }

    default: {
      return {
        ...state,
        isPlaying: false
      }
    }
  }

}

function findPodcaster(state = { podcasterName: 'Toutes' }, action) {
  if (action.type == 'search') {
    return (
      {
        ...state,
        podcasterName: action.text
      }
    )
  } else {
    return (
      {
        ...state,
        podcasterName: action.text
      }
    )
  }
}

const store = createStore(combineReducers({ storeRedux, findPodcaster }))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
AppRegistry.registerComponent('RadioJ', () => App)


