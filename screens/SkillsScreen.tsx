import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";
import MyButton from "../components/MyButton";
import CardImage from "../components/CardImage";
import CardText from "../components/CardText";

const SkillsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CardImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Skills"
        image="https://jusapp.s3.eu-central-1.amazonaws.com/laptop.jpg"
        description="Una de las habilidades que me destacan es el ser una persona
        proactiva, demostrado en la formación que realicé para técnico
        programación e implementación de E-Commerce, webs y aplicaciones de
        venta. A pesar que llevo una corta trayectoria en el mundo de la
        programación me veo muy motivado y con ganas de seguir aprendiendo,
        ya sea por medio de formaciones o por mi propia cuenta."
      />

      <CardText
        name="Edgar Costilla"
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQGOJEDGFZpuCg/profile-displayphoto-shrink_200_200/0/1516867329561?e=1648684800&v=beta&t=JnvvhF2lqEZHDTBdHNOyPdB_ABy5YDwZgJjJit3GUx8"
        title="Formador"
        description="'Justice es una persona que le encanta este mundillo, a pesar de la
        edad que tiene sus ganas por aprender son increíbles'"
      >
        <MyButton
          title="Edgar Costilla"
          colorTitle="white"
          FontAwesomeIcon="linkedin-square"
          colorIcon="white"
          backgroundColor={["#4C9ED6", "#0A66C2"]}
          link="https://www.linkedin.com/in/edgarcostilla/"
        />
      </CardText>
    </ScrollView>
  );
};

export default SkillsScreen;
