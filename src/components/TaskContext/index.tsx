import React, { createContext, useState, ReactNode, useContext } from "react";

interface Task {
  task: string;
  description: string;
  check: boolean;
}

interface TaskContextData {
  tasks: Task[];
  addTask: (newTask: Task) => boolean;
  toggleTaskCheck: (index: number) => void;
  deleteTask: (taskToDelete: Task) => void;
  editTask: (updatedTask: Task) => boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const TaskContext = createContext<TaskContextData>(
  {} as TaskContextData
);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (newTask: Task) => {
    const isDuplicate = tasks.some(
      (task) => task.task.toLowerCase() === newTask.task.toLowerCase()
    );

    if (isDuplicate) {
      return false;
    }

    setTasks((prevTasks) => [...prevTasks, newTask]);
    return true;
  };

  const toggleTaskCheck = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].check = !updatedTasks[index].check;
    setTasks(updatedTasks);
  };

  const deleteTask = (taskToDelete: Task) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const editTask = (updatedTask: Task) => {
    const isDuplicate = tasks.some(
      (task) =>
        task.task.toLowerCase() === updatedTask.task.toLowerCase() &&
        task !== updatedTask
    );

    if (isDuplicate) {
      return false;
    }

    const updatedTasks = tasks.map((task) =>
      task === updatedTask
        ? {
            ...task,
            task: updatedTask.task,
            description: updatedTask.description,
          }
        : task
    );

    setTasks(updatedTasks);
    return true;
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCheck,
        deleteTask,
        editTask,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
