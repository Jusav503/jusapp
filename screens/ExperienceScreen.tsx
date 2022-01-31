import { Video } from "expo-av";
import React from "react";
import { Image, ScrollView, Text, View, } from "react-native";

import ImageCarousel from "../components/ImageCarousel";
import MyButton from "../components/MyButton";
import images from "../data/images";
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
        <ImageCarousel images={images.features} />
        <Text style={styles.text}>
          He realizado "features" como las de algunas aplicaciones móviles, por
          ejemplo: likes dinamicos como los de Twitter o TikTok, el poder
          mostrar listas de reproducción (almacenadas en AWS amplify) reproducir
          o pausar una canción, mostrar la barra de progreso de la canción como
          en Spotify... También he realizado una amplia replica de UI's de
          algunas aplicaciones tales como: Netflix, Tesla, WhatsApp, Amazon y
          TikTok.
        </Text>
        <MyButton
          link="https://github.com/Jusav503/TikTokClone"
          FontAwesomeIcon="github"
          colorIcon="white"
          title="Jusav503"
          colorTitle="white"
          backgroundColor={["#161B22", "#0D1117"]}
        />
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
        <Image
          style={styles.image}
          source={{
            uri: "https://jusapp.s3.eu-central-1.amazonaws.com/tictactoe.jpg",
          }}
        />
        <Text style={styles.text}>
          Creación del juego Tic-tac-toe, usando el metodo "map()" para
          posicionar las equis y circulos.
        </Text>

        <MyButton
          link="https://github.com/Jusav503/tictactoe"
          FontAwesomeIcon="github"
          colorIcon="white"
          title="Jusav503"
          colorTitle="white"
          backgroundColor={["#161B22", "#0D1117"]}
        />
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
        <ImageCarousel images={images.jusavcoin} />
        <Text style={styles.text}>
          Uso de API "Coingecko" para mostrar nombre de las criptomonedas,
          precio, gráfica entre otras cosas
        </Text>

        <MyButton
          link="https://github.com/Jusav503/jusavcoin"
          FontAwesomeIcon="github"
          colorIcon="white"
          title="Jusav503"
          colorTitle="white"
          backgroundColor={["#161B22", "#0D1117"]}
        />
      </View>
    </ScrollView>
  );
};

export default ExperienceScreen;
