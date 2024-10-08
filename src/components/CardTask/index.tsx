import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import {
  ContainerCardTask,
  TaskContainer,
  TaskDescri,
  TaskTag,
  TaskText,
  TextButton,
} from "./estilo";

export function CardTask() {
  return (
    <ContainerCardTask>
      <FontAwesome name="circle" size={14} color="black" />
      <TaskContainer>
        <TaskText>Tarefa</TaskText>
        <TaskDescri>Trabalho</TaskDescri>
      </TaskContainer>
      <TaskTag>
        <Feather name="folder" size={14} color="white" />
        <TextButton>Feito</TextButton>
      </TaskTag>
    </ContainerCardTask>
  );
}
