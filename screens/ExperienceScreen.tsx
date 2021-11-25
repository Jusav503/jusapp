import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";
import { openURL } from "expo-linking";
import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

const ExperienceScreen = () => {
  const video = React.useRef(null);
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
            <Text style={styles.aboutScreen}>Projectos Realizados</Text>
          </View>
        </View>
        <Video
          ref={video}
          style={styles.media}
          source={require("../assets/videos/timelapse.mp4")}
          resizeMode="contain"
          isLooping
          shouldPlay
        />
        <Text style={styles.text}>
          Durante un mes programé una pequeña aplicación web del tipo Blog en
          una agencia de marketing y software a medida ubicada en Reus,
          Tarragona, dicha aplicación web fue creada en Laravel 8, contó con una
          pequeña área administrativa donde se podía crear, actualizar o
          eliminar las publicaciones. Área la cual solo los usuarios
          seleccionados en el area administrativa podían tener acceso a ella.
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/foto.jpg")}
            style={styles.cardAvatar}
          />
          <View>
            <Text style={styles.nameHeader}>Jusav</Text>
            <Text style={styles.aboutScreen}>Projectos Realizados</Text>
          </View>
        </View>
        <Video
          ref={video}
          style={styles.media}
          source={require("../assets/videos/timelapse.mp4")}
          resizeMode="contain"
          isLooping
          shouldPlay
        />
        <Text style={styles.text}>
          Hello
        </Text>
        <TouchableOpacity onPress={() => openURL("https://github.com/Jusav503?tab=repositories")}>
          <FontAwesome name="github" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExperienceScreen;
