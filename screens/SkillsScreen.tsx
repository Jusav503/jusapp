import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import styles from "./styles";
import MyButton from "../components/MyButton";

const SkillsScreen = () => {
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
            <Text style={styles.aboutScreen}>Skills</Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/laptop.jpg")}
          style={styles.image}
        />
        <View>
          <Text style={styles.text}>
            Una de las habilidades que me destacan es el ser una persona
            proactiva, demostrado en la formación que realicé para técnico
            programación e implementación de E-Commerce, webs y aplicaciones de
            venta. A pesar que llevo una corta trayectoria en el mundo de la
            programación me veo muy motivado y con ganas de seguir aprendiendo,
            ya sea por medio de formaciones o por mi propia cuenta.
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://media-exp1.licdn.com/dms/image/C4D03AQGOJEDGFZpuCg/profile-displayphoto-shrink_200_200/0/1516867329561?e=1648684800&v=beta&t=JnvvhF2lqEZHDTBdHNOyPdB_ABy5YDwZgJjJit3GUx8",
            }}
            style={styles.cardAvatar}
          />
          <View>
            <Text style={styles.nameHeader}>Edgar Costilla</Text>
            <Text style={styles.aboutScreen}>Formador</Text>
          </View>
        </View>

        <View>
          <Text style={styles.text}>
            "Justice es una persona que le encanta este mundillo, a pesar de la
            edad que tiene sus ganas por aprender son increíbles"
          </Text>
          <MyButton
            title="Edgar Costilla"
            colorTitle="white"
            FontAwesomeIcon="linkedin-square"
            colorIcon="white"
            backgroundColor={["#4C9ED6", "#0A66C2"]}
            link="https://www.linkedin.com/in/edgarcostilla/"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SkillsScreen;
