import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface buttonProps{
    title: string;
    colorTitle: string;
    FontAwesomeIcon: string;
    colorIcon: string;
    backgroundColor: string
}

const MyButton = (props:buttonProps) => {
  return (
    <View style={[styles.buttonContainer, {backgroundColor: props.backgroundColor}]}>
      <FontAwesome name={props.FontAwesomeIcon} size={24} color={props.colorIcon} />
      <Text style={[styles.buttonText, {color: props.colorTitle}]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default MyButton;
