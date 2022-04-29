import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import RadioStack from './TabsFolder/RadioStackFolder/RadioStack'
import Podcast from './TabsFolder/PodcastStackFolder/PodcastStack'
import Categories from './TabsFolder/Categories'
import Videos from './TabsFolder/Videos'
import Contact from './TabsFolder/Contact'

export default function Tabs() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="RadioStack" component={RadioStack} options={{ headerShown: false }} />
                <Tab.Screen name="Podcasts" component={Podcast} options={{ headerShown: false }} />
                <Tab.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
                <Tab.Screen name="Videos" component={Videos} options={{ headerShown: false }} />
                <Tab.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}