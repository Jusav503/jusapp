import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import ImageCarousel from "./ImageCarousel";

const CardCarrouselImage = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: props.avatar }} style={styles.cardAvatar} />
        <View>
          <Text style={styles.nameHeader}>Jusav</Text>
          <Text style={styles.aboutScreen}>{props.title}</Text>
        </View>
      </View>
      <ImageCarousel images={props.images} />
      <Text style={styles.text}>{props.description}</Text>
      {props.children}
    </View>
  );
};

export default CardCarrouselImage;
