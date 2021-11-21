import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from '../constants/Colors'
import Sections from "../components/Sections";


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.photo}
            source={{
              uri: "https://avatars.githubusercontent.com/u/73290423?v=4",
            }}
          />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AboutMe")}>
          <Sections title="Acerca de mí" FontAwesome5Icon="user-alt" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Education")} >
          <Sections title="Formaciones y certificados" FontAwesome5Icon="book" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Skills")}>
          <Sections title="Skills" FontAwesome5Icon="fighter-jet" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Experience")}>
          <Sections title="Proyectos realizados" FontAwesome5Icon="laptop-code" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.homePalette.background,
  },
  headerContainer: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: "#E94560",
    borderTopLeftRadius: 500,
    borderBottomLeftRadius: 500,
    padding: 10,
    top: 60,
    left: 30
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  mainContainer: {
    backgroundColor: "#6D7BE8",
    width: "100%",
    flex: 3,
    paddingHorizontal: 30,
    borderTopEndRadius: 500,
    top: 20,
    paddingTop: 60,
  },
});