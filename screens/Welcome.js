import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import luggage from "./Luggage";

const welcome = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bx1}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
            }}
            source={require("../assets/bsk.jpg")}
          />
        </View>
      </View>

      <View style={styles.txx}>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 25,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Truck & Muscle, Anytime You Need It
        </Text>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 25,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Load,Haul and Deliver just about anything.
        </Text>
        {/* <View style={styles.tx2}>
          <Text
            style={{ fontSize: 35, fontWeight: "bold", alignSelf: "center" }}
          >
            CRIBO
          </Text>
        </View> */}
      </View>

      <View style={styles.bx2}>
        <View>
          <TouchableOpacity
            onPress={() => navigate("Luggage")}
            style={{
              backgroundColor: "#d2691e",
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 5,
              margin: 10,
              width: "50%",
              padding: 10,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              START NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  bx1: {
    // backgroundColor: "blue",
    flex: 0.7,
    justifyContent: "center",
    // margin: 50,
  },

  txx: {
    // backgroundColor: "yellow",
    flex: 0.2,
  },

  tx2: {
    backgroundColor: "green",
    flex: 0.5,
  },

  bx2: {
    // backgroundColor: "orange",
    flex: 0.2,
    justifyContent: "center",
    // margin: 50,
  },
});
