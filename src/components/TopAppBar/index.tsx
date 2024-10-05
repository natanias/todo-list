import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, IconButton } from "react-native-paper";
import { styles } from "./styles";

export default function TopAppBar() {
  return (
    <View style={styles.headerContainer}>
      <IconButton
        size={20}
        icon="filter-variant"
        onPress={() => console.log("Pressed")}
      />

      <Text style={styles.headerTitle}>MasterTask</Text>

      <Avatar.Image size={45} source={require("../../assets/Natanzin.jpg")} />
    </View>
  );
}
