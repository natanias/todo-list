import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Alert } from "react-native";
import FloateButton from "../../components/FloateButton/buttonflu";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import { styles } from "./styles";
import { CardTask } from "../../components/CardTask";
import BarraPesquisa from "../../components/BarraPesquisa";
import  {BottonAdicionar}  from "../../components/BottonAdicionar/adicionar";

export default function Home() {
  const [cardtasks, setCardTaks] = useState<
    { description: string; check: boolean }[]
  >([]);
  const [taskText, setTaskText] = useState("");
  const [counTask, setCounTask] = useState(0);

  function handleTaskAdd() {
    if (taskText.length > 0) {
      return Alert.alert("Eerro", "Tarefa está sem descrição.");
    }

    if (cardtasks.some((task) => task.description === taskText)) {
      return Alert.alert("Eerro", "Tarefa ja existe.");
    }

    const newTask = { description: taskText, check: false };
    setCardTaks([...cardtasks, newTask]);
    setTaskText("");
  }

  useEffect(() => {
    let totalTask = cardtasks.length;
    setCounTask(totalTask);
  }, [cardtasks]);

  return (
    <View>
      <Header />
      <BarraPesquisa onPress={handleTaskAdd} onChangeText={setTaskText} value={taskText}/>
      <View style={styles.spinnerContainer}>
        <Spinner title="Criadas" count={2} />
        <Spinner title="Concluídas" count={8} />
      </View>

      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 10 }}>
        <FlatList
          data={cardtasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CardTask />}
          ListEmptyComponent={() => (
            <View>
              <Text> Não tem tarefas cadastradas </Text>
            </View>
          )}
        />
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
