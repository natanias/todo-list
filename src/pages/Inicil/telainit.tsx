import React from "react";
import { View } from "react-native";
import { CardTask } from "../../components/CardTask/carde";
import BarraPesquisa from "./../../BarraPesquisa/barra";
import TopBar from "../../components/TopAppBar/top";
import FloateButton from "../../components/FloateButton/buttonflu";
import FloatingActionButton from "../../components/FloateButton/buttonflu";
import Spinner from "../../components/Spinner";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{ alignItems: "center", backgroundColor: "#E8F1F2" }}>
      <TopBar />
      <BarraPesquisa />

      <View style={styles.info}>
        <Spinner title={"Criadas"} count={2} />
        <Spinner title={"Concluídas"} count={2} />
      </View>

      <CardTask taskTitle={""} taskDescription={""} taskTag={""} />
    </View>
  );
}

export const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,

    marginLeft: 30,
  },
});
