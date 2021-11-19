import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import AboutMeScreen from "../screens/AboutMeScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "#2A2438" },
          headerTintColor: "#fff",
          headerTitle: "",
          headerShadowVisible: false
        }}
      >
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={AboutMeScreen} name="AboutMe" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
