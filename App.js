import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import screen9 from "./js/screen9";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ScreenStack = () => (
  <Stack.Navigator initialRouteName="screen9"  screenOptions={{ headerShown: false }}>
    <Stack.Screen name="screen9" component={screen9}/>
    {/* <Stack.Screen name="screen10" component={screen10}/>
    <Stack.Screen name="screen11" component={screen11}/>
    <Stack.Screen name="screen12" component={screen12}/> */}
  </Stack.Navigator>
);
const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="xxx"
        component={ScreenStack}

      />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;