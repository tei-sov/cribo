import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CountryFlag from "react-native-country-flag";

const Welcome = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Text style={{ fontSize: 50, color: "white", fontWeight: "700" }}>
          Cribo
        </Text>
      </View>
      <View style={styles.Texts}>
        <Text style={{ marginVertical: 20, fontSize: 20 }}>
          Connect With Us
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CountryFlag isoCode="gh" size={25} />
        <TextInput style={styles.TextInput} placeholder="Phone"/>
        </View>
        <TouchableOpacity onPress={()=>navigate('Luggage')} style={{marginTop: 50}}>
          <Text>Already Have an Account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  Logo: {
    flex: 1,
    backgroundColor: "red",
    borderBottomRightRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  Texts: {
    flex: 0.4,
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  TextInput: {
    width: 200,
    borderBottomWidth: 1,
    marginHorizontal: 10,
  }
});
