import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cardPalette.background,
  },
  cardContainer: {
    backgroundColor: "black",
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  text: { color: Colors.cardPalette.text, fontSize: 15, marginVertical: 10 },
  image: {
    width: "100%",
    height: 270,
    borderRadius: 10,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default styles;
