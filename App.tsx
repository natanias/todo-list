import React from "react";
import { View } from "react-native";
import { CardTask } from "./src/CardTask/carde";
import BarraPesquisa from "./src/BarraPesquisa/barra";
import TopBar from "./src/TopAppBar/top";

export default function App() {
  return (
    <View style={{ alignItems: "center" }}>
      <TopBar />
      <BarraPesquisa />
      <CardTask taskTitle={""} taskDescription={""} taskTag={""} />
    </View>
  );
}
