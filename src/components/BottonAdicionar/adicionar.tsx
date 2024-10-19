import React, { useState } from "react";
import { Modal, Alert } from "react-native";
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
import { useTasks } from "../../components/TaskContext";

export const BottonAdicionar: React.FC<BottonAdicionarProps> = ({
  isVisible,
  onClose,
}) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = () => {
    if (!task || !description) {
      Alert.alert("Erro", "Preencha o título e a descrição");
      return;
    }

    const success = addTask({ task, description, check: false });

    if (!success) {
      Alert.alert("Erro", "Já existe uma tarefa com esse título.");
    } else {
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
