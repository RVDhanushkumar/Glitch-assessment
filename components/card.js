import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const images = {
  image1: require("../assets/pic3.png"),
  image2: require("../assets/pic5.png"),
  image3: require("../assets/pic6.png"),
  like: require("../assets/like.png"),
  save: require("../assets/save.png"),
  file: require("../assets/file.png"),
};

export default function Card(props) {
  return (
    <TouchableOpacity>
    <View style={styles.card}>
      <Image
        height={100}
        width={100}
        style={styles.image}
        source={images[props.img]}
      />
      <View style={styles.textContainer}>
        <Image style={{height:17.16,width:18.88,marginRight:10}} source={images[props.kind]} />
        <Text style={{ color: "#D4D4D4", fontSize: 12 }}>{props.name}</Text>
      </View>
      <View
        style={{
          height: 3.62,
          backgroundColor: "#23262F",
          width: 156,
          marginTop: 15,
        }}
      ></View>
      <View
        style={{
          height: 4.91,
          backgroundColor: "#23262F",
          width: 139.43,
          opacity: 0.6,
        }}
      ></View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom:20,
    padding: 10,
    height: 183.2,
    width: 166,
    backgroundColor: "#1E2128",
    alignItems: "center",
  },
  image: {
    width: 166,
    height: 130,
  },
  textContainer: {
    marginTop: 10,
    flexDirection:"row",
  },
});
