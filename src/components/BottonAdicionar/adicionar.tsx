import React, { useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
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
}

export const BottonAdicionar: React.FC<BottonAdicionarProps> = ({ isVisible, onClose }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (task && description) {
      console.log({ task, description });
      handleCancel();
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
            onChangeText={(text: React.SetStateAction<string>) => setTask(text)}
          />
          <Input
            placeholder="Descrição"
            value={description}
            onChangeText={(text: React.SetStateAction<string>) =>
              setDescription(text)
            }
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
