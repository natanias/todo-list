import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme/index";
import { useTasks } from "..//TaskContext";

export default function BarraPesquisa() {
  const { searchTerm, setSearchTerm } = useTasks(); 

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Buscar pela sua tarefa"
        value={searchTerm}  
        onChangeText={setSearchTerm}  
        placeholderTextColor={theme.cores.neutro}
        keyboardType="default"
      />
    </View>
  );
}
