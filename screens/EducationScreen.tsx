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
        <Image source={require("../assets/images/formacion.jpeg")} style={styles.image} />
        <View>
          <Text style={styles.text}>
            Técnico de programación e implementación de E-Commerce, webs y aplicaciones de venta. realizado desde Octubre 2020 hasta mayo 2021 finalicé dicha formación realizando práticas laborales en una agencia de marketing y desarrollo de aplicaciones a medida. Con una duración de 30 dias.
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{flexDirection:"row"}}>
          <Image source={require("../assets/images/foto.jpg")} style={styles.cardAvatar} />
          <View>
            <Text style={styles.nameHeader}>Jusav</Text>
            <Text style={styles.aboutScreen}>Formaciones y certificados</Text>
          </View>
        </View>
        <Image source={require("../assets/images/certificado.png")} style={styles.image} />
        <View>
          <Text style={styles.text}>
            Curso de programación de E-Commerce en Laravel. Realizado desde junio 2021 hasta agosto 2021 en la plataforma de cursos online Udemy.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EducationScreen;
