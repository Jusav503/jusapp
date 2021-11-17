import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SectionProps {
  title: string;
  FontAwesome5Icon: string;
}

const Sections = (props: SectionProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <FontAwesome5 name={props.FontAwesome5Icon} size={20} color="#DBD8E3" />
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginTop: 20,
    backgroundColor: "#5C5470",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  imageContainer: { flex: 1, alignItems: "center" },
  title: { flex: 2, fontSize: 25, color: "#DBD8E3", fontWeight: "bold" },
});
