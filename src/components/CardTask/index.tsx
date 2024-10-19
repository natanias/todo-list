import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';

interface CardTaskProps {
  task: string;
  description: string;
  check: boolean;
  onToggleCheck: () => void;
  onTagPress: () => void; 
}

const CardTask: React.FC<CardTaskProps> = ({ task, description, check, onToggleCheck, onTagPress }) => {
  return (
    <View style={styles.cardContainer}>
      
      <TouchableOpacity onPress={onToggleCheck} style={styles.checkboxContainer}>
        {check ? (
          <Feather name="check-circle" size={24} color="#13a8ec" /> 
        ) : (
          <Feather name="circle" size={24} color="#666" /> 
        )}
      </TouchableOpacity>

      
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{task}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
      </View>

      
      <TouchableOpacity style={styles.tagContainer} onPress={onTagPress}>
        <Feather name="chevron-down" size={20} color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
};

export default CardTask;
