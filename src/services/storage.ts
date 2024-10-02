import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@tasks';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

/**
 * Armazena a lista de tarefas na AsyncStorage.
 * @param tasks Lista de tarefas a serem armazenadas
 */
export const storeTask = async (tasks: Task[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Erro ao armazenar dados:', e);
  }
};

/**
 * Recupera a lista de tarefas da AsyncStorage.
 * @returns Lista de tarefas ou um array vazio, caso não haja dados
 */
export const getTask = async (): Promise<Task[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao recuperar dados:', e);
    return [];
  }
};

/**
 * Remove a lista de tarefas da AsyncStorage.
 */
export const removeTask = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Erro ao remover dados:', e);
  }
};

/**
 * Limpa todos os dados armazenados na AsyncStorage.
 */
export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('Erro ao limpar armazenamento:', e);
  }
};