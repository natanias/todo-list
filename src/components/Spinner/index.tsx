import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
  title: string; 
  count: number;
};
export default function Spinner({ title, count }: Props) {
  return (
    <View style={styles.tarefaContainer}>
      <Text style={styles.tarefaCriada}>{title}</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
    </View>
  );
}
