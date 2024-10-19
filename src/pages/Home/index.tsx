import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  TextInput,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import { styles } from "./styles";
import CardTask from "../../components/CardTask/index";
import BarraPesquisa from "../../components/BarraPesquisa";
import { useTasks } from "../../components/TaskContext";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

interface Task {
  task: string;
  description: string;
  check: boolean;
}
export default function Home() {
  const {
    tasks,
    toggleTaskCheck,
    deleteTask,
    editTask,
    searchTerm,
    setSearchTerm,
  } = useTasks();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [countTask, setCountTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    const filtered =
      searchTerm.trim() === ""
        ? tasks
        : tasks.filter((task) =>
            task.task.toLowerCase().includes(searchTerm.toLowerCase())
          );

    setFilteredTasks(filtered);
    setCountTask(filtered.filter((task) => !task.check).length);
    setCompletedTasks(filtered.filter((task) => task.check).length);
  }, [tasks, searchTerm]);

  const toggleCheck = (index: number) => {
    toggleTaskCheck(index);
  };

  const handleTagPress = (task: Task) => {
    setSelectedTask(task);
    setIsOptionsModalVisible(true);
  };

  const closeOptionsModal = () => {
    setIsOptionsModalVisible(false);
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false);
    setSelectedTask(null);
  };

  const handleOpenEditModal = () => {
    if (selectedTask) {
      setNewTitle(selectedTask.task);
      setNewDescription(selectedTask.description);
      setIsOptionsModalVisible(false);
      setIsEditModalVisible(true);
    }
  };

  const handleEditTask = () => {
    if (!newTitle || !newDescription) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (selectedTask) {
      const updatedTask = {
        ...selectedTask,
        task: newTitle,
        description: newDescription,
      };
      const success = editTask(updatedTask);

      if (!success) {
        Alert.alert("Erro", "Já existe uma tarefa com esse título.");
      } else {
        closeEditModal();
      }
    }
  };

  const handleDeleteTask = () => {
    if (selectedTask) {
      deleteTask(selectedTask);
      closeOptionsModal();
    }
  };

  return (
    <View>
      <Header />

      <BarraPesquisa />

      <View style={styles.spinnerContainer}>
        <Spinner title="Criadas" count={countTask} />
        <Spinner title="Concluídas" count={completedTasks} />
      </View>
      
   

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CardTask
              task={item.task}
              description={item.description}
              check={item.check}
              onToggleCheck={() => toggleCheck(index)}
              onTagPress={() => handleTagPress(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={{ padding: 20 }}>
              <Text>Não tem tarefas cadastradas.</Text>
            </View>
          )}
        />
      </View>
      
      
      <Modal
        visible={isOptionsModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>O que deseja fazer com esta tarefa?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={handleOpenEditModal}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={handleDeleteTask}
              >
                <Text style={styles.buttonText}>Deletar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={closeOptionsModal}
              >
               
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isEditModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Editar Tarefa</Text>

            <TextInput
              style={styles.input}
              placeholder="Título"
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={newDescription}
              onChangeText={setNewDescription}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={handleEditTask}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={closeEditModal}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}
