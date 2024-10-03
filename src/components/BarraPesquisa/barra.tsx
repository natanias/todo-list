import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { CardTask } from "../CardTask/carde";

type Task = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

export default function BarraPesquisa() {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={search}
          onChangeText={handleSearch}
          placeholderTextColor="#E8F1F2"
        />
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardTask
            taskTitle={item.title}
            taskDescription={item.description}
            taskTag={item.tag}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#1B98E0",
    borderRadius: 4,
    alignItems: "center",
    paddingHorizontal: 10,
    width: "90%",
    height: 48,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#E8F1F2",
    marginLeft: 10,
 
  },
  icon: {
    marginLeft: 5,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
});




