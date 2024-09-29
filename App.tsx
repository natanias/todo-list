import React from "react";
import { View } from "react-native";
import { CardTask } from "./src/CardTask/carde";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CardTask taskTitle={""} taskDescription={""} taskTag={""} />
    </View>
  );
}
