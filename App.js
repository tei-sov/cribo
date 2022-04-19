import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import StackNavigator from "./StackNavigator";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StackNavigator />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
