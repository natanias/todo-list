import React, { useState } from "react";
import { Modal } from "react-native";
import {
  AddButton,
  ButtonRow,
  ButtonText,
  CancelButton,
  Content,
  Input,
  ModalContainer,
  Title,
} from "./style";

interface BottonAdicionarProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (task: { task: string; description: string }) => void;
}

export const BottonAdicionar: React.FC<BottonAdicionarProps> = ({ isVisible, onClose, onSubmit }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (task && description) {
      onSubmit({ task, description });
      handleCancel();
    } else {
      console.log("Preencha o título e a descrição");
    }
  };

  const handleCancel = () => {
    setTask("");
    setDescription("");
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <ModalContainer>
        <Content>
          <Title>Adicionar Tarefa</Title>
          <Input
            placeholder="Tarefa"
            value={task}
            onChangeText={(text: string) => setTask(text)} 
          />
          <Input
            placeholder="Descrição"
            value={description}
            onChangeText={(text: string) => setDescription(text)} 
          />
          <ButtonRow>
            <CancelButton onPress={handleCancel}>
              <ButtonText>Cancelar</ButtonText>
            </CancelButton>
            <AddButton onPress={handleSubmit}>
              <ButtonText>Cadastrar</ButtonText>
            </AddButton>
          </ButtonRow>
        </Content>
      </ModalContainer>
    </Modal>
  );
};
