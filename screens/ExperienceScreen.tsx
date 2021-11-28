import { Video } from "expo-av";
import { openURL } from "expo-linking";
import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";

import ImageCarousel from "../components/ImageCarousel";
import MyButton from "../components/MyButton";
import experienceImages  from "../data/experienceImages"
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
        <ImageCarousel images={experienceImages.images} />
        <Text style={styles.text}>
          He realizado "features" como las de algunas aplicaciones móviles, por ejemplo: likes dinamicos como los de Twitter o TikTok, el poder
          mostrar listas de reproducción (almacenadas en AWS amplify) reproducir o pausar una canción, mostrar la barra de progreso de la canción como en Spotify... También he realizado una amplia replica de UI's de algunas aplicaciones tales como: Netflix, Tesla, WhatsApp, Amazon y TikTok.
        </Text>
        <TouchableOpacity onPress={() => openURL("https://github.com/Jusav503?tab=repositories")} >
          <MyButton
            FontAwesomeIcon="github"
            colorIcon="white"
            title="Jusav503"
            colorTitle="white"
            backgroundColor="#171B22"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExperienceScreen;
