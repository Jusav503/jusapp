import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CardImage from "../components/CardImage";

import styles from "./styles";

const EducationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CardImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Formacion"
        image="https://jusapp.s3.eu-central-1.amazonaws.com/formacion.jpeg"
        description="Técnico de programación e implementación de E-Commerce, webs y aplicaciones de venta. realizado desde Octubre 2020 hasta mayo 2021 finalicé dicha formación realizando práticas laborales en una agencia de marketing y desarrollo de aplicaciones a medida. Con una duración de 30 dias."
      />

      <CardImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Formacion"
        image="https://jusapp.s3.eu-central-1.amazonaws.com/certificado.png"
        description="Curso de programación de E-Commerce en Laravel. Realizado desde junio 2021 hasta agosto 2021 en la plataforma de cursos online Udemy."
      />
    </ScrollView>
  );
};

export default EducationScreen;
