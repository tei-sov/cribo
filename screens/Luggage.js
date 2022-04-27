import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import destination from "./Destination";

const luggage = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bx1}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>CRIBO.SERVICES</Text>
      </View>
      <View style={styles.bx2}>
        <Text style={{ fontSize: 15 }}>What can we help with ?</Text>
      </View>
      <ScrollView style={styles.serv}>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => navigate("Destination")}
            style={{
              backgroundColor: "#ffe4c4",
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 5,
              margin: 10,
              height: "35%",
              width: 380,
              padding: 10,
            }}
          >
            <MaterialIcons name="house" size={30} color="black" />
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Apartment Move
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate("Destination")}
            style={{
              backgroundColor: "#ffe4c4",
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 5,
              margin: 10,
              height: "35%",
              width: 380,
              padding: 10,
            }}
          >
            <MaterialCommunityIcons
              name="human-male-male"
              size={30}
              color="black"
            />
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              No Truck,Labour Only
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Destination")}
            style={{
              backgroundColor: "#ffe4c4",
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 5,
              margin: 10,
              height: "35%",
              width: 380,
              padding: 10,
            }}
          >
            <MaterialCommunityIcons name="truck-fast" size={30} color="black" />
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Haul Away
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bx3}>
        <TouchableOpacity
          onPress={() => navigate("Destination")}
          style={{
            backgroundColor: "#d2691e",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 5,
            margin: 20,
            height: "40%",
            width: "50%",
            padding: 10,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default luggage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  bx1: {
    // backgroundColor: "yellow",
    flex: 0.1,
    // margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  bx2: {
    // backgroundColor: "green",
    flex: 0.1,
    alignItems: "center",
  },

  serv: {
    // backgroundColor: "red",
    flex: 0.7,
    // margin: 40,
    // alignItems: "center",
  },

  bx3: {
    // backgroundColor: "orange",
    flex: 0.2,
    // margin: 40,
  },
});
