import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Podcast from './PodcastFolder/Podcast';
import Podcasters from './PodcastFolder/Podcasters';
import PodcastsPlayList from './PodcastFolder/PodcastsPlayList';

export default function PodcastStack() {
    return (

        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Podcast" component={Podcast} options={{ headerShown: false }} />
                <Stack.Screen name="Podcasters" component={Podcasters} options={{ headerShown: false }} />
                <Stack.Screen name="PodcastsPlayList" component={PodcastsPlayList} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}