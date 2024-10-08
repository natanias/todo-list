import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  Modal,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import { styles } from "./styles";
import CardTask from "../../components/CardTask/index";
import BarraPesquisa from "../../components/BarraPesquisa";

interface Task {
  task: string;
  description: string;
  check: boolean;
}

interface HomeProps {
  cardTasks: Task[];
}

export default function Home({ cardTasks }: HomeProps) {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(cardTasks);
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleSearch = (text: string) => {
    setTaskText(text);
    if (text.trim() === "") {
      setFilteredTasks(cardTasks);
    } else {
      const filtered = cardTasks.filter((task) =>
        task.task.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  };

  useEffect(() => {
    setCountTask(cardTasks.filter((task) => !task.check).length);
    setCompletedTasks(cardTasks.filter((task) => task.check).length);
    setFilteredTasks(cardTasks);
  }, [cardTasks]);

  const toggleCheck = (index: number) => {
    const updatedTasks = [...filteredTasks];
    updatedTasks[index].check = !updatedTasks[index].check;
    setFilteredTasks(updatedTasks);
    setCountTask(updatedTasks.filter((task) => !task.check).length);
    setCompletedTasks(updatedTasks.filter((task) => task.check).length);
  };

  const handleTagPress = (task: Task) => {
    setSelectedTask(task);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedTask(null);
  };

  const handleEditTask = () => {
    Alert.alert("Editar Tarefa", `Editar a tarefa: ${selectedTask?.task}`);
    closeModal();
  };

  const handleDeleteTask = () => {
    const updatedTasks = filteredTasks.filter((task) => task !== selectedTask);
    setFilteredTasks(updatedTasks);
    setCountTask(updatedTasks.filter((task) => !task.check).length);
    setCompletedTasks(updatedTasks.filter((task) => task.check).length);
    closeModal();
  };

  return (
    <View>
      <Header />

      <BarraPesquisa
        onChangeText={handleSearch}
        value={taskText}
        onPress={() => {}}
      />

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

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>O que deseja fazer com esta tarefa?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={handleEditTask}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.roundButton}
                onPress={handleDeleteTask}
              >
                <Text style={styles.buttonText}>Deletar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundButton} onPress={closeModal}>
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
