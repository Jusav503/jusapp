import React from "react";
import { ScrollView, } from "react-native";

import CardCarrouselImage from "../components/CardCarrouselImage";
import CardImage from "../components/CardImage";
import CardComponent from "../components/CardVideoComponent";
import MyButton from "../components/MyButton";
import images from "../data/images";
import styles from "./styles";

const ExperienceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CardCarrouselImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Projectos realizados"
        images={images.features}
        description="He realizado features como las de algunas aplicaciones móviles, por
          ejemplo: likes dinamicos como los de Twitter o TikTok, el poder
          mostrar listas de reproducción (almacenadas en AWS amplify) reproducir
          o pausar una canción, mostrar la barra de progreso de la canción como
          en Spotify... También he realizado una amplia replica de UI's de
          algunas aplicaciones tales como: Netflix, Tesla, WhatsApp, Amazon y
          TikTok."
      >
        <MyButton
          link="https://github.com/Jusav503/TikTokClone"
          FontAwesomeIcon="github"
          colorIcon="white"
          title="Jusav503"
          colorTitle="white"
          backgroundColor={["#161B22", "#0D1117"]}
        />
      </CardCarrouselImage>

      <CardComponent
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Projectos Realizados"
        myVideo="https://jusapp.s3.eu-central-1.amazonaws.com/timelapse.mp4"
      >
        Durante un mes programé una pequeña aplicación web del tipo Blog en una
        agencia de marketing y software a medida ubicada en Reus, Tarragona.
        Dicha aplicación web fue creada en Laravel 8, contó con una pequeña área
        administrativa donde se podía crear, actualizar o eliminar las
        publicaciones. Área la cual solo los usuarios seleccionados en el area
        administrativa podían tener acceso a ella.
      </CardComponent>

      <CardImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Projectos Realizados"
        image="https://jusapp.s3.eu-central-1.amazonaws.com/tictactoe.jpg"
        description="Creación del juego Tic-tac-toe, usando el metodo 'map()' para
        posicionar las equis y circulos."
      >
        <MyButton
          link="https://github.com/Jusav503/tictactoe"
          FontAwesomeIcon="github"
          colorIcon="white"
          title="Jusav503"
          colorTitle="white"
          backgroundColor={["#161B22", "#0D1117"]}
        />
      </CardImage>

      <CardCarrouselImage
        avatar="https://avatars.githubusercontent.com/u/73290423?v=4"
        title="Projectos Realizados"
        description="Uso de API 'Coingecko' para mostrar nombre de las criptomonedas,
        precio, gráfica entre otras cosas."
        images={images.jusavcoin}
      >
        <MyButton
          link="https://github.com/Jusav503/jusavcoin"
          FontAwesomeIcon="github"
          colorIcon="white"
          title="Jusav503"
          colorTitle="white"
          backgroundColor={["#161B22", "#0D1117"]}
        />
      </CardCarrouselImage>
    </ScrollView>
  );
};

export default ExperienceScreen;
