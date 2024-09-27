import styled from "styled-components/native";
import { Text } from "react-native";



export const Container = styled.View`
  margin-top: 20px;
  width: 95%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

export const TarefaTexto = styled.Text`
  color: #2f3243;
  font-size: 16px;
  font-weight: 500;
  margin-right: 159px;
`;

export const TarefaFeita = styled.TouchableOpacity`
  width: 22.9px;
  height: 22.9px;
  margin-left: 14.75px;
  justify-content: center;
  align-items: center;
  
`;

export const SetaTarefa = styled.TouchableOpacity`
  width: 22.9px;
  height: 22.9px;
  margin-right: 7.85px;
  justify-content: center;
  align-items: center;
`;
