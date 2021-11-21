import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";

const AboutMeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={require("../assets/images/foto.jpg")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Esta es para mi, una oportunidad única de poner en práctica todo lo
            aprendido durante los meses de estudio y formación. {"\n"} La
            juventud es un grado en cuanto a rapidez de aprendizaje y
            asimilación de tareas. Esta es para mi, una oportunidad única de
            poner en práctica todo lo aprendido durante los meses de estudio y
            formación. La juventud es un grado en cuanto a rapidez de
            aprendizaje y asimilación de tareas.
          </Text>
          <Text style={styles.text}>
            Esta es para mi, una oportunidad única de poner en práctica todo lo
            aprendido durante los meses de estudio y formación. {"\n"} La
            juventud es un grado en cuanto a rapidez de aprendizaje y
            asimilación de tareas. Esta es para mi, una oportunidad única de
            poner en práctica todo lo aprendido durante los meses de estudio y
            formación. La juventud es un grado en cuanto a rapidez de
            aprendizaje y asimilación de tareas.
          </Text>
          <Text style={styles.text}>
            Esta es para mi, una oportunidad única de poner en práctica todo lo
            aprendido durante los meses de estudio y formación. {"\n"} La
            juventud es un grado en cuanto a rapidez de aprendizaje y
            asimilación de tareas. Esta es para mi, una oportunidad única de
            poner en práctica todo lo aprendido durante los meses de estudio y
            formación. La juventud es un grado en cuanto a rapidez de
            aprendizaje y asimilación de tareas.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutMeScreen;
