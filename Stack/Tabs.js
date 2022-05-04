import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

import RadioStack from './TabsFolder/RadioStackFolder/RadioStack'
import Radio from './TabsFolder/RadioStackFolder/RadioScreens/Radio';
import Podcast from './TabsFolder/PodcastStackFolder/PodcastStack'
import Categories from './TabsFolder/CategoriesStackFolder/CategoriesStack'
import Videos from './TabsFolder/Videos'
import Contact from './TabsFolder/Contact'

import { createStore, combineReducers } from 'redux';
import { Provider, useSelector } from 'react-redux';

const store = createStore(combineReducers({ storeRedux, findPodcaster, playPodcast }))

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
    switch (action.type) {
        case "search": {
            return (
                {
                    ...state,
                    podcasterName: action.text
                }
            )
        }

        default: {
            return (
                state
            )
        }
    }
}

function playPodcast(state = { podcastData: 'Empty' }, action) {
    switch (action.type) {
        case 'playThis': {
            return ({
                ...state,
                podcastData: action.podcastData
            })
        }

        default: {
            return (state)
        }
    }
}

export default function Tabs() {

    return (
        <Provider store={store}>
            <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen name="Radio" component={Radio} options={{
                        headerShown: false, tabBarIcon: (fo, co, si) => (
                            <Ionicons name='radio' size={25} color={'#000000'} />
                        )
                    }} />
                    <Tab.Screen name="Podcasts" component={Podcast} options={{
                        headerShown: false, tabBarIcon: (fo, co, si) => (
                            <MaterialCommunityIcons name='google-podcast' size={25} color={'#000000'} />
                        )
                    }} />
                    <Tab.Screen name="Actualites" component={Categories} options={{
                        headerShown: false, tabBarIcon: (fo, co, si) => (
                            <FontAwesome5 name='book-reader' size={25} color={'#000000'} />
                        )
                    }} />
                    <Tab.Screen name="Videos" component={Videos} options={{
                        headerShown: false, tabBarIcon: (fo, co, si) => (
                            <MaterialCommunityIcons name='youtube-tv' size={25} color={'#000000'} />
                        )
                    }} />
                    <Tab.Screen name="Contact" component={Contact} options={{
                        headerShown: false, tabBarIcon: (fo, co, si) => (
                            <Ionicons name='call' size={25} color={'#000000'} />
                        )
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    )
}