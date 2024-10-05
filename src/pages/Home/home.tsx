import React from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import { styles } from "./styles";

export default function Home() {
  return (
    <View>
      <Header />
      <View style={styles.spinnerContainer}>
        <Spinner title="Criadas" count={2} />
        <Spinner title="Concluídas" count={8} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
