import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View style={styles.container}>
      {}
      <Feather name="list" size={24} color="black" style={styles.iconMenu} />

      {}
      <Text style={styles.title}>MasterTask</Text>

      {}
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    height: 42,
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
  avatar: {
    flex: 1,
    width: 10,
    height: 40,
    borderRadius: 50,
  },
});
