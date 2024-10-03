import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BarraPesquisa() {
  const [search, setSearch] = useState("");

  const handleSearch = (Text: any) => {
    setSearch(Text);
    console.log("Texto de pesquisa:", Text);
  };

  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={search}
        onChangeText={handleSearch}
        placeholderTextColor="#E8F1F2"
        keyboardType="default"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1B98E0",
    borderRadius: 4,
    alignItems: "center",
    paddingHorizontal: 10,
    width: "90%",
    height: 48,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#E8F1F2",
    marginLeft: 10,
  },
  icon: {
    marginLeft: 5,
  },
});
