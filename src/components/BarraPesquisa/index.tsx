import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme/index";

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
        placeholder="Buscar pela sua tarefa"
        value={search}
        onChangeText={handleSearch}
        placeholderTextColor={theme.cores.neutro}
        keyboardType="default"
      />
    </View>
  );
}
