import { Text, View, StyleSheet } from "react-native";
import Card from "./card";

export default function Collection() {
  return (
    
    <View style={styles.container}>
      <View style={styles.cardRow}>
        <Card name="Liked (32)" img="image1" kind="like" />
        <Card name="Saved (23)" img="image2" kind="save"/>
        <Card name="Files (3)" img="image3" kind="file"/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "rgb(29, 26, 26)",
    padding: 10,
  },
  cardRow: {
    flexDirection: "row", 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
});
