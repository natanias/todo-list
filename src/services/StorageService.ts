import AsyncStorage from '@react-native-async-storage/async-storage';

// Definindo a chave de armazenamento
const STORAGE_KEY = '@tasks';

// Definindo a interface para as tarefas
export interface TaskType {
    title: string;
    description: string;
    status: boolean; // Adicionando status
}

// Função para salvar tarefas
export const saveTasks = async (tasks: TaskType[]) => { // Atualizando o tipo
    try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
        // Erro ao salvar dados
        console.error("Error saving tasks", e);
    }
};

// Função para buscar tarefas
export const getTasks = async (): Promise<TaskType[]> => { // Atualizando o tipo de retorno
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        // Erro ao ler dados
        console.error("Error reading tasks", e);
        return [];
    }
};

// Função para limpar tarefas
export const clearTasks = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        // Erro ao limpar dados
        console.error("Error clearing tasks", e);
    }
};