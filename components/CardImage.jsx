import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const CardImage = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: props.avatar }} style={styles.cardAvatar} />
        <View>
          <Text style={styles.nameHeader}>Jusav</Text>
          <Text style={styles.aboutScreen}>{props.title}</Text>
        </View>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <Text style={styles.text}>{props.description}</Text>
      {props.children}
    </View>
  );
};

export default CardImage;
