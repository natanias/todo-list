import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const FloatingButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  width: 10px;
  align-items: center;
  justify-content: center;
`;

const FloatingButton = styled(TouchableOpacity)`
  background-color: #13293d;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;

`;

const FloatingActionButton = ({ onPress = FloatingButton }) => {
  return (
    <FloatingButtonContainer>
      <FloatingButton onPress={onPress}>
        <Feather name="plus" size={24} color="#fff" />
      </FloatingButton>
    </FloatingButtonContainer>
  );
};

export default FloatingActionButton;
