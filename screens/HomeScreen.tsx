import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Sections from "../components/Sections";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.photo} source={{uri: "https://avatars.githubusercontent.com/u/73290423?v=4"}}
        />
        <TouchableOpacity onPress={() => navigation.navigate("AboutMe")}>
          <Sections title="Acerca de mí" FontAwesome5Icon="user-alt" />
        </TouchableOpacity>

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
    backgroundColor: Colors.palette.background,
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
