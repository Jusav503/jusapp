import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Sections from "../components/Sections";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        <Sections title="Acerca de mí" FontAwesome5Icon="user-alt" />
        <Sections title="Formación" FontAwesome5Icon="book" />
        <Sections title="Skills" FontAwesome5Icon="fighter-jet" />
        <Sections title="Trabajos realizados" FontAwesome5Icon="laptop-code" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#2A2438",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
