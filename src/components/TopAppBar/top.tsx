import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Avatar, IconButton } from "react-native-paper";

export default function TopBar() {
  return (
    <View style={styles.container}>
      {}
      <IconButton
        size={20}
        icon="filter-variant"
        onPress={() => console.log("Pressed")}
      />

      {}
      <Text style={styles.title}>MasterTask</Text>

      {}

      <Avatar.Image size={45} source={require("../../assets/Natanzin.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8F1F2",
    paddingHorizontal: 10,
    height: 42,
    marginTop: 30,
  },
  iconMenu: {
    flex: 1,
  },
  title: {
    flex: 2,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
