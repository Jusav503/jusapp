import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { openURL } from "expo-linking";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface buttonProps {
  link: string;
  title: string;
  colorTitle: string;
  FontAwesomeIcon: string;
  colorIcon: string;
  backgroundColor: any[];
}

const MyButton = (props: buttonProps) => {
  return (
    <TouchableOpacity onPress={() => openURL(props.link)}>
      <LinearGradient
        style={styles.container}
        colors={props.backgroundColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <FontAwesome
          name={props.FontAwesomeIcon}
          size={24}
          color={props.colorIcon}
        />
        <Text style={[styles.buttonText, { color: props.colorTitle }]}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
  },
  buttonText: {
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default MyButton;
