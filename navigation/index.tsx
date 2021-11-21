import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from '../constants/Colors'
import * as React from "react";

import HomeScreen from "../screens/HomeScreen";
import EducationScreen from "../screens/EducationScreen";
import SkillsScreen from "../screens/SkillsScreen";
import AboutMeScreen from "../screens/AboutMeScreen";
import ExperienceScreen from "../screens/ExperienceScreen";

const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: Colors.cardPalette.backgroundScreen },
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
        <Stack.Screen component={EducationScreen} name="Education" />
        <Stack.Screen component={SkillsScreen} name="Skills" />
        <Stack.Screen component={ExperienceScreen} name="Experience" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
