import React from "react";
import { View } from "react-native";
import { CardTask } from "../../components/CardTask/carde";
import BarraPesquisa from "./../../components/BarraPesquisa/barra";
import TopBar from "../../components/TopAppBar/top";
import FloateButton from "../../components/FloateButton/buttonflu";
import FloatingActionButton from "../../components/FloateButton/buttonflu";

export default function App() {
  return (
    <View style={{ alignItems: "center", backgroundColor: "#E8F1F2" }}>
      <TopBar />
      <BarraPesquisa />
      <CardTask taskTitle={""} taskDescription={""} taskTag={""} />
    </View>
  );
}
