import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Categories from './CategoriesScreens/Categories'
import ReadTopic from './CategoriesScreens/ReadTopic';

const Drawer_ = createNativeStackNavigator();

export default function CategoriesStack() {

    return (
        <NavigationContainer independent={true}>
            <Drawer_.Navigator>
                <Drawer_.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
                <Drawer_.Screen name="ReadTopic" component={ReadTopic} options={{ headerShown: false }} />
            </Drawer_.Navigator>
        </NavigationContainer>
    )
}