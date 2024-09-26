import React from "react";
import { BotaoLogo, BotaoMenu, Container, ContainerText } from "./styles";
import Foundation from "@expo/vector-icons/Foundation";
import Entypo from "@expo/vector-icons/Entypo";

export function LogoBar() {
  return (
    <Container>
      <BotaoLogo>
        <Foundation name="checkbox" size={35} color="white" />
      </BotaoLogo>
      <ContainerText>TASKSLIST</ContainerText>
      <BotaoMenu>
        <Entypo name="menu" size={30} color="white" />
      </BotaoMenu>
    </Container>
  );
}
