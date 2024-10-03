import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>olá mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F1F2",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 25,
    fontWeight: "100",
  },
});
