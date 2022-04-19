import { StyleSheet, Text, View } from "react-native";
import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const Destination = () => {
  // const [latLng, setLatLng] = useState({});

  // const checkPermission = async () => {
  //   const hasPermission = await Location.requestForegroundPermissionsAsync();
  //   if (hasPermission.status === "granted") {
  //     const permission = await askPermission();
  //     return permission;
  //   }
  //   return true;
  // };
  // const askPermission = async () => {
  //   const permission = await Location.requestForegroundPermissionsAsync();
  //   return permission.status === "granted";
  // };
  // const getLocation = async () => {
  //   try {
  //     const { granted } = await Location.requestForegroundPermissionsAsync();
  //     if (!granted) return;
  //     const {
  //       coords: { latitude, longitude },
  //     } = await Location.getCurrentPositionAsync();
  //     setLatLng({ latitude: latitude, longitude: longitude });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const _map = useRef(1);
  // useEffect(() => {
  //   checkPermission();
  //   getLocation(), [];
  // });

  return (
    <View style={styles.container}>
      <View style={styles.bx1}>
        <Text style={{ alignSelf: "center", fontSize: 15, fontWeight: "bold" }}>
          Locations
        </Text>
        <TouchableOpacity
          onPress={() => navigate("Destination")}
          style={{
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 5,
            margin: 20,
            height: "35%",
            width: 380,
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
            Pick-up Location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Destination")}
          style={{
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 5,
            margin: 20,
            height: "35%",
            width: 380,
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
            Drop-off Location
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{ alignSelf: "center" }}>
            I don't know my locations yet
          </Text>
        </View>
      </View>
      <View style={styles.bx2}>
        {/* <MapView
          provider={PROVIDER_GOOGLE}
          ref={_map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView> */}
      </View>
      <View style={styles.bx3}>
        <TouchableOpacity
          onPress={() => navigate("Destination")}
          style={{
            backgroundColor: "#d2691e",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 5,
            margin: 25,
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

export default Destination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  bx1: {
    // backgroundColor: "blue",
    flex: 0.2,
  },

  bx2: {
    // backgroundColor: "green",
    flex: 0.7,
  },

  bx3: {
    // backgroundColor: "yellow",
    flex: 0.1,
  },
});
