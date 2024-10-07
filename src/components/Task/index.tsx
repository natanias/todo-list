import React from 'react';
import { Container, TaskDone, TaskTitle, TaskDescription, TaskDetails } from './style';
import { Feather } from '@expo/vector-icons';
import { TaskType } from '../../types/TaskTypes';
import { Swipeable } from 'react-native-gesture-handler';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskProps extends TaskType {
    onToggle: (status: boolean) => void; // Callback para atualizar o status
    onDelete: () => void; // Callback para excluir a tarefa
}

export function Task({ title, description, status, onToggle, onDelete }: TaskProps) {
    const handleToggleTaskDone = () => {
        onToggle(!status); // Chama a função de callback para atualizar o status
    };

    const renderRightActions = () => {
        return (
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Feather name="trash" size={24} color="white" />
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <Container onPress={handleToggleTaskDone}>
                <TaskDone>
                    <Feather 
                        name={status ? "check-circle" : "circle"} 
                        size={16} 
                        color={status ? "green" : "gray"} 
                    />
                </TaskDone>
                <TaskDetails>
                    <TaskTitle numberOfLines={1} style={{ textDecorationLine: status ? 'line-through' : 'none' }}>
                        {title}
                    </TaskTitle>
                    <TaskDescription numberOfLines={1}>{description}</TaskDescription>
                </TaskDetails>
            </Container>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80, // Largura do botão de exclusão
        height: '100%', // Para preencher a altura da tarefa
    },
});