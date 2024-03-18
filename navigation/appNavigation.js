import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../screens/onboarding'
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboarding'>
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ title: 'Onboarding...', headerShown: false }}
                />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation
