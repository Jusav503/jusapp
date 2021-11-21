import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";

const EducationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={{flexDirection:"row"}}>
          <Image source={require("../assets/images/foto.jpg")} style={styles.cardAvatar} />
          <View>
            <Text style={styles.nameHeader}>Jusav</Text>
            <Text style={styles.aboutScreen}>Formaciones y certificados</Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/foto.jpg")}
          style={styles.image}
        />
        <View>
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

export default EducationScreen;
