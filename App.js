import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main8 from './js/Main8';
import Main12 from './js/Main12';
import Main11 from './js/Main11';
import Main9 from './js/Main9';
import Main7 from './js/Main7';

const Stack = createStackNavigator();

const App = () => {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        //         <Stack.Screen name="Home" component={Main8} />
        //         <Stack.Screen name="Category" component={Main7} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <Main9 />
    );
};

export default App;
