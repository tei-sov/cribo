import { StyleSheet, Text, View } from "react-native";
import React, { Component, useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import MapComponent from "../src/Components/MapComponent";
import { Ionicons } from "@expo/vector-icons";

const Destination = () => {
  const navigation = useNavigation();
  const [latLng, setLatLng] = useState({});
  const [userOrigin, setUserOrigin] = useState({});

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };
  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {
      console.log(err);
    }
  };
  const _map = useRef(1);
  useEffect(() => {
    checkPermission();
    getLocation();
  }, []);

  useEffect(() => {
    setUserOrigin({
      latitude: latLng.latitude,
      longitude: latLng.longitude,
    });
  }, [latLng]);


  return (
    <View style={styles.container}>
      <View style={styles.Location}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <TextInput
            style={{
              borderWidth: 2,
              width: 200,
              marginVertical: 5,
              borderRadius: 5,
              paddingLeft: 5,
            }}
            placeholder=" From Current Location"
          />
          <TextInput
            style={{
              borderWidth: 2,
              width: 200,
              marginVertical: 5,
              borderRadius: 5,
              paddingLeft: 5,
            }}
            placeholder="Destination"
          />
        </View>
      </View>
      <View style={{ flex: 1, borderTopLeftRadius: 50 }}>
        <MapComponent
          userOrigin={5.765492225}
          userDestination={-0.174579620361}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.Next}>
            <Text style={{color: 'white', fontSize: 20}}>Next</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Destination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  Location: {
    flex: 0.2,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
    top: 50,
    zIndex: 1, // works on ios
    elevation: 2, // works on android
    flexDirection: "row",
  },
  back: {
    backgroundColor: "black",
    width: 45,
    height: 45,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  Next: {
    bottom: 100,
    zIndex: 1, // works on ios
    elevation: 2, // works on android
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 100,
    height: 40,
    borderRadius: 10
  },
});
