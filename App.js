import manage from "./assets/manage.png";
import manage2 from "./assets/manage2.png";
import collection from "./assets/collectionlogo.png";
import collection2 from "./assets/collection2.png";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import Collection from "./components/collections";
import Manage from "./components/manage";



const { width, height } = Dimensions.get("window");

export default function App() {
  const [col, setCol] = useState(true);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      translateX.setValue(0);
      Animated.loop(
        Animated.timing(translateX, {
          toValue: -width,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };
  
    startAnimation();
  }, []);
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>
      
      <View style={styles.backgroundWrapper}>
          <Animated.View
            style={[
              styles.backgroundContainer,
              { transform: [{ translateX }] },
            ]}
          >
            
            <ImageBackground source={require("./assets/background.png")} style={styles.background} />
            <ImageBackground source={require("./assets/background.png")} style={styles.background} />
          </Animated.View>
        </View>
        <View
          style={{
            padding: 20,
            height: "366.6",
          }}
        >
          <View
            style={{
              height: 97.6,
              margin: 10,
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ height: 97.6, width: 98.4 }}
              source={require("./assets/dog.png")}
            />
            <View style={{ flexDirection: "row" }}>
            <Image source={require("./assets/share.png")} style={{height:26.35,width:23.95}} />
              <Image source={require("./assets/setting.png")} style={{height:26.35,width:23.95,marginLeft:20}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: "#D4D4D4", fontSize: 23.04 }}>
                @Theo_from_hsr{" "}
                <Image source={require("./assets/verified.png")} style={{height:21.12,width:21.12}} />
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderStyle: "dotted",
                borderBottomWidth: 2,
                borderColor: "gray",
              }}
            >
              <Text style={{ color: "#A3A3A3", fontSize: 12 }}>
                EDIT PROFILE 
              </Text>
              <MaterialIcons name="edit" size={13} color="gray" />
            </View>
          </View>
          <View>
            <Text style={{ color: "white", marginBottom: 10, fontSize: 12 }}>
            🇮🇳 INDIA
            </Text>
            <Text style={{ color: "gray", fontSize: 16, maxWidth: "350", fontStyle:"Circular Std" }}>
              18 y/o with high ambitions. want to build cool stuff!
            </Text>
            <View style={{flexDirection:"row",marginTop: 35,marginBottom:5}}>
            <Image source={require("./assets/followers.png")} style={{height:21,width:21}} />
            <Text style={{ color: "white", fontSize: 15.6,marginLeft:5 }}>
              2
            </Text>
            </View>
            <Text style={{ color: "#A3A3A3", fontSize: 10.8 }}>FOLLOWING</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", backgroundColor: "black",height:54.68 }}>
          <TouchableOpacity
            style={{ width: "50%", height: 50 }}
            onPress={() => setCol(true)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: col ? "#07E79D" : "black",
                borderBottomWidth: 3,
                flexDirection:"row"
              }}
            >
              <Image style={{height:20,width:19.05, marginRight:6}} source={col ? collection : collection2} />
              <Text
                style={{
                  color: col ? "#07E79D" : "#A3A3A3",
                  fontSize: 13,
                  fontFamily:"Copper Hewitt"
                }}
              >
                COLLECTIONS
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: "50%", height: 50 }}
            onPress={() => setCol(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: !col ? "#07E79D" : "black",
                borderBottomWidth: 3,
                flexDirection:"row"
              }}
            >
              <Image style={{height:22.68,width:22.68, marginRight:6}} source={col ? manage : manage2}  />
              <Text
                style={{
                  color: !col ? "#07E79D" : "#A3A3A3",
                  fontSize: 13,
                }}
              >
                MANAGE TAGS
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ height: 450.48 }}>{col ? <Collection /> : <Manage />}</View>
        <View style={{flex:1, justifyContent:"center",alignItems:"center" ,backgroundColor:"black",height:60}}>
          <Image style={{height:32.14,width:147.8}} source={require("./assets/companyLogo.png")} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "rgb(26, 15, 52)",
  },
  backgroundWrapper: {
    position: "absolute",
    width: width * 2,
    height: height,
    overflow: "hidden",
  },
  backgroundContainer: {
    flexDirection: "row",
    position: "absolute",
    width: width * 2, 
    backgroundColor:"rgba(21, 16, 43, 0.52)"
  },
  background: {
    width: width,
    height: height,
    resizeMode: "cover",
    opacity: 0.2,
  },
});
