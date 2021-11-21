import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";

interface SectionProps {
  title: string;
  FontAwesome5Icon: string;
}

const Sections = (props: SectionProps) => {

  return (
    <View style={styles.container} >
      <View style={styles.iconContainer}>
        <FontAwesome5 name={props.FontAwesome5Icon} size={20} color={Colors.homePalette.icon} />
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginTop: 20,
    backgroundColor: Colors.homePalette.componentBackground,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  iconContainer: { flex: 1, alignItems: "center" },
  title: { flex: 3, fontSize: 25, color: Colors.homePalette.componentTitle, fontWeight: "bold" },
});
