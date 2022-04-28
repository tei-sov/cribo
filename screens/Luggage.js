import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const width = Dimensions.get("window").width;
const height = getStatusBarHeight();
const Luggage = () => {
  const { navigate } = useNavigation();
  const [done1, setDone1] = useState(false);
  const [labourSelect, setLabourSelect] = useState(false);

  const handleSelect1 = () => {
    setDone1(!done1);
  };
  const handleLabourSelect2 = ()=>{
    setLabourSelect(!labourSelect)
  }

  return (
    <View style={styles.container}>
      <View style={styles.Title}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
          CRIBO.SERVICES
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>
          What can we help with ?
        </Text>
      </View>
      <View style={styles.service}>
        <View style={{ flex: 1, marginHorizontal: 10, paddingTop: 20, }}>
          <View style={{ flex: 1 }}>
            <View style={styles.move}>
              <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Text style={{ fontSize: 25 }}>
                  Moving From {"\n"}
                  Your Old {"\n"}
                  Appartment
                </Text>
                <TouchableOpacity
                  onPress={handleSelect1}
                  style={{
                    backgroundColor: "red",
                    width: 80,
                    alignItems: "center",
                    marginVertical: 20,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>select</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 150, height: 150 }}
                  source={require("../assets/move.png")}
                />
                {done1 ? <MaterialIcons name="done" size={30} color="green" /> : (
                  null
                )}
              </View>
            </View>
            <View style={styles.move}>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ fontSize: 25 }}>
                  Moving From {"\n"}
                  Your Old {"\n"}
                  Appartment
                </Text>
                <TouchableOpacity
                  onPress={handleLabourSelect2}
                  style={{
                    backgroundColor: "red",
                    width: 80,
                    alignItems: "center",
                    marginVertical: 20,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>select</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{ width: 150, height: 150 }}
                  source={require("../assets/labour.png")}
                />
                {labourSelect ? <MaterialIcons name="done" size={30} color="green" /> : (
                  null
                )}
              </View>
            </View>
          </View>
          <View style={styles.bx3}>
            <TouchableOpacity
              onPress={() => navigate("Destination")}
              style={{
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                padding: 10,
                width: width - 50,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Luggage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    paddingTop: height,
  },

  Title: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
  service: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginHorizontal: 5,
    bottom: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  move: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
  },
  bx3: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
