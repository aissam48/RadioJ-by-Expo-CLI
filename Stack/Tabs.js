import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

function playPodcast(state = { podcastData: 'Emty' }, action) {
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
                    <Tab.Screen name="Radio" component={Radio} options={{ headerShown: false }} />
                    <Tab.Screen name="Podcasts" component={Podcast} options={{ headerShown: false }} />
                    <Tab.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
                    <Tab.Screen name="Videos" component={Videos} options={{ headerShown: false }} />
                    <Tab.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    )
}