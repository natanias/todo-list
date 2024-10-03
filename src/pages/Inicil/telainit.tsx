import React from "react";
import { View } from "react-native";
import { CardTask } from "../../components/CardTask/carde";
import BarraPesquisa from "./../../BarraPesquisa/barra";
import TopBar from "../../components/TopAppBar/top";

export default function App() {
  return (
    <View style={{ alignItems: "center", backgroundColor: "#E8F1F2" }}>
      <TopBar />
      <BarraPesquisa />
      <CardTask taskTitle={""} taskDescription={""} taskTag={""} />
    </View>
  );
}
