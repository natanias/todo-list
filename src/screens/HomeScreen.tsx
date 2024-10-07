import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Task } from '../components/Task'; 
import { TopBar } from '../components/TopAppBar'; 
import { BottomBar } from '../components/BottomBar'; 
import { BottomSheetAddTask } from '../components/BottmSheetAddTask'; 
import { SearchBar } from '../components/SearchBar'; 
import { saveTasks, getTasks } from '../services/StorageService'; 
import { TaskType } from '../types/TaskTypes';
import EmptyList from '../components/Empty/EmptyList'; // Corrigindo a importação

const HomeScreen: React.FC = () => {
    const [isAddTaskVisible, setAddTaskVisible] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const storedTasks = await getTasks();
            setTasks(storedTasks);
        };
        fetchTasks();
    }, []);

    const handleMenuPress = () => {
        console.log("Menu pressionado!");
    };

    const handleOpenAddTask = () => {
        setAddTaskVisible(true);
    };

    const handleAddTask = async (title: string, description: string) => {
        const newTask: TaskType = { title, description, status: false };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        await saveTasks(updatedTasks);
        setAddTaskVisible(false);
    };

    const handleSearch = () => {
        console.log(`Buscando por: ${searchQuery}`);
    };

    const handleToggleTask = (index: number, newStatus: boolean) => {
        const updatedTasks = tasks.map((task, idx) => 
            idx === index ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    const handleDeleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TopBar onMenuPress={handleMenuPress} userImage="https://picsum.photos/200" />
            {tasks.length > 0 && ( // Exibe a barra de pesquisa apenas se houver tarefas
                <SearchBar 
                    query={searchQuery} 
                    onChange={setSearchQuery} 
                    onSearch={handleSearch} 
                />
            )}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {tasks.length === 0 ? ( // Verifica se não há tarefas
                    <EmptyList message="Você ainda não tem nenhuma tarefa definida, clique no botão + na parte inferior da tela para adicionar uma nova tarefa." />
                ) : (
                    tasks.map((task, index) => (
                        <Task 
                            key={index} 
                            title={task.title} 
                            description={task.description} 
                            status={task.status} 
                            onToggle={(newStatus) => handleToggleTask(index, newStatus)} 
                            onDelete={() => handleDeleteTask(index)} 
                        />
                    ))
                )}
            </ScrollView>
            <BottomBar 
                onFloatButtonPress={handleOpenAddTask} 
                onIconPress={(iconName) => console.log(`${iconName} pressionado!`)} 
            />
            <BottomSheetAddTask 
                isVisible={isAddTaskVisible} 
                onClose={() => setAddTaskVisible(false)} 
                onAddTask={handleAddTask} 
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F1F2',
    },
    scrollContainer: {
        paddingVertical: 10,
        paddingBottom: 80, // Se necessário para o BottomBar
    },
});

export default HomeScreen;