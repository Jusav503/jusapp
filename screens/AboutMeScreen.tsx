import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CardImage from "../components/CardImage";

import styles from "./styles";

const AboutMeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CardImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Acerca de mi"
        image="https://jusapp.s3.eu-central-1.amazonaws.com/aboutme.jpg"
        description="¡Hey! Soy Justice Velasco, nací el 28 de agosto del 2002 en San
        Salvador, El Salvador. El amor por los ordenadores y la tecnología
        comenzó a los 6 años de edad, ya que, a esa edad mi padre era dueño
        de un Ciber, ciber donde yo pasaba horas frente al ordenador descubriendo el mundo del
        internet."
      />

      <CardImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Acerca de mi"
        image="https://jusapp.s3.eu-central-1.amazonaws.com/formacion.jpeg"
        description="A los 17 años entré a una formación de programación y desarrollo de
        aplicaciones web, aprendí muchas de las tecnologías que se usan en
        el día a día de los programadores, también aprendí a como
        planificar, organizarme, desarrollar y monitorear los proyectos
        realizados."
      />

      <CardImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Acerca de mi"
        image="https://shift8web.ca/wp-content/uploads/2019/03/shift8-javascript-port-scanner-2.jpg"
        description="Este pequeño proyecto creado con React Native y expo es para mi, una
        oportunidad única de poner en práctica todo lo aprendido durante los
        meses de estudio y formación.

        'La juventud es un grado en cuanto a rapidez de aprendizaje y asimilación de tareas.'
        "
      />
    </ScrollView>
  );
};

export default AboutMeScreen;
