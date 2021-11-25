import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

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
    height: 300
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#171B22",
    width:"100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10}
});

export default styles;
