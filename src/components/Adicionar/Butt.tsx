import React from "react";
import { Container, BotLupa, BotAdd, BotSelc } from "./estilo";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

type PropsAdicionar = {
  title: string;
  tab: boolean;
  status: boolean;
  onSelcPress: () => void;
  onAddPress: () => void;
  onPesquisaPress: () => void;
};

export function Adicionar({
  title,
  tab,
  status,
  onSelcPress,
  onAddPress,
  onPesquisaPress,
}: PropsAdicionar) {
  return (
    <Container>
      <BotSelc>
        <Feather nome="list-alt" size={24} color="white" />
      </BotSelc>
      <BotAdd>
        <Feather nome="note-add" size={24} color="white" />
      </BotAdd>
      <BotLupa>
        <Feather name="search" size={24} color="white" />
      </BotLupa>
    </Container>
  );
}
