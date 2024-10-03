import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
  title: string; // O título deve ser uma string
};
export default function Spinner({ title }: Props) {
  return (
    <View style={styles.tarefaContainer}>
      <Text style={styles.tarefaCriada}>{title}</Text>
    </View>
  );
}
