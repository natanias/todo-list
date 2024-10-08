import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme/index";

type Props = {
  onPress: () => void;
  onChangeText: (text: string) => void;
  value: string;
};

export default function BarraPesquisa({ onPress, onChangeText, value }: Props) {
  return (
    <View style={styles.container}>
      {/* Ícone de pesquisa com toque para acionar o onPress */}
      <TouchableOpacity onPress={onPress}>
        <Feather name="search" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Buscar pela sua tarefa"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={theme.cores.neutro}
        keyboardType="default"
      />
    </View>
  );
}
