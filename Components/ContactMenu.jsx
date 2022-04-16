import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function ContactMenu() {
  const contactMenuButtons = [
    {
      id: 0,
      type: "starred",
      name: "Starred",
    },
    {
      id: 1,
      type: "contact",
      name: "Samir",
      photo: require("../assets/samir.jpg"),
    },
    {
      id: 2,
      type: "contact",
      name: "Ajay",
      photo: require("../assets/samir.jpg"),
    },
    {
      id: 3,
      type: "contact",
      name: "Kumar",
      photo: require("../assets/samir.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      {contactMenuButtons.map(({ type, name, photo, id }) => (
        <View style={styles.row} key={id}>
          {type === "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image style={styles.image} source={photo} />
          )}

          <Text style={styles.text}>{name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: { flexDirection: "row", marginTop: 20, alignItems: "center" },
  text: { color: "white", paddingLeft: 15, fontSize: 18 },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
