import { Image, StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import Colors from "../constants/Colors";
import { Video } from "expo-av";

const CardVideoComponent = (props) => {
  const video = React.useRef(null);

  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{uri:props.avatar}} style={styles.cardAvatar} />
        <View>
          <Text style={styles.nameHeader}>Jusav</Text>
          <Text style={styles.aboutScreen}>{props.title}</Text>
        </View>
      </View>
      <Video
        ref={video}
        style={styles.media}
        source={{uri:props.myVideo}}
        resizeMode="contain"
        isLooping
        shouldPlay
      />
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default CardVideoComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardPalette.backgroundScreen,
  },
  cardContainer: {
    backgroundColor: Colors.cardPalette.componentBackground,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
  },
  cardAvatar: { width: 40, height: 40, borderRadius: 50, marginHorizontal: 7 },
  nameHeader: {
    color: Colors.cardPalette.text,
    fontWeight: "bold",
    fontSize: 17,
  },
  aboutScreen: {
    color: Colors.cardPalette.text,
    fontSize: 10,
  },
  text: { color: Colors.cardPalette.text, fontSize: 14, marginVertical: 10 },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "contain",
  },
  media: {
    width: "100%",
    height: 300,
  },
});
