import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Radio from './RadioScreens/Radio';

import Programmes from './RadioScreens/Programmes'

const Drawer_ = createDrawerNavigator();

export default function RadioStack() {

    return (
        <NavigationContainer independent={true}>
            <Drawer_.Navigator>
                <Drawer_.Screen name="RadioJ" component={Radio} />
                <Drawer_.Screen name="Programmes" component={Programmes} />
            </Drawer_.Navigator>
        </NavigationContainer>
    )
}