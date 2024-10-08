import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FloatingButtonContainer, FloatingButton } from "./style";

interface FloatingActionButtonProps {
  onPress?: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
}) => {
  return (
    <FloatingButtonContainer>
      <FloatingButton onPress={onPress}>
        <Feather name="plus" size={24} color="#fff" />
      </FloatingButton>
    </FloatingButtonContainer>
  );
};

export default FloatingActionButton;
