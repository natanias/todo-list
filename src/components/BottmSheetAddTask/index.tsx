import React from 'react';
import { Modal, TextInput, Button } from 'react-native';
import { Container, Title, CloseButton } from './style';
import { Feather } from '@expo/vector-icons';

interface BottomSheetAddTaskProps {
    isVisible: boolean;
    onClose: () => void;
    onAddTask: (title: string, description: string) => void; // Função para adicionar uma nova tarefa
}

export function BottomSheetAddTask({ isVisible, onClose, onAddTask }: BottomSheetAddTaskProps) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleAddTask = () => {
        onAddTask(title, description);
        setTitle('');
        setDescription('');
        onClose();
    };

    return (
        <Modal visible={isVisible} transparent animationType="slide">
            <Container>
                <CloseButton onPress={onClose}>
                    <Feather name="x" size={24} color="#fff" />
                </CloseButton>
                <Title>Adicionar Tarefa</Title>
                <TextInput
                    placeholder="Título"
                    value={title}
                    onChangeText={setTitle}
                    style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }}
                />
                <TextInput
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                    style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }}
                />
                <Button title="Adicionar" onPress={handleAddTask} />
            </Container>
        </Modal>
    );
}