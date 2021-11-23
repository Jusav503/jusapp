import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";

const AboutMeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/foto.jpg")}
            style={styles.cardAvatar}
          />
          <View>
            <Text style={styles.nameHeader}>Jusav</Text>
            <Text style={styles.aboutScreen}>Acerca de mi</Text>
          </View>
        </View>
        <Image source={require("../assets/images/aboutme.jpg")} style={styles.image}/>
        <View>
          <Text style={styles.text}>
            ¡Hey! Soy Justice Velasco, nací el 28 de agosto del 2002 en San
            Salvador, El Salvador. El amor por los ordenadores y la tecnología
            comenzó a los 6 años de edad, ya que, a esa edad mi padre era dueño
            de un "Cyber Cafe" donde yo pasaba horas descubriendo el mundo del
            internet.
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row", marginVertical:10 }}>
          <Image
            source={require("../assets/images/foto.jpg")}
            style={styles.cardAvatar}
          />
          <View>
            <Text style={styles.nameHeader}>Jusav</Text>
            <Text style={styles.aboutScreen}>Acerca de mi</Text>
          </View>
        </View>
        <Image source={require("../assets/images/formacion.jpeg")} style={styles.image} />
        <View>
          <Text style={styles.text}>
            A los 17 años entré a una formación de programación y desarrollo de
            aplicaciones web, aprendí muchas de las tecnologías que se usan en
            el día a día de los programadores, también aprendí a como
            planificar, organizarme, desarrollar y monitorear los proyectos
            realizados.
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/foto.jpg")}
            style={styles.cardAvatar}
          />
          <View>
            <Text style={styles.nameHeader}>Jusav</Text>
            <Text style={styles.aboutScreen}>Acerca de mi</Text>
          </View>
        </View>
        <Image source={require("../assets/images/project.jpg")} style={styles.image} />
        <View>
          <Text style={styles.text}>
            Este pequeño proyecto creado con React Native y expo es para mi, una
            oportunidad única de poner en práctica todo lo aprendido durante los
            meses de estudio y formación.
          </Text>
          <Text style={styles.text}>
            "La juventud es un grado en cuanto a rapidez de aprendizaje y
            asimilación de tareas."
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutMeScreen;
