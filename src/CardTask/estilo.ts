import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



export const ContainerCardTask = styled.View`
  width: 90%; 
  height: hp('50%'); 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px; 
  background-color: #f5f5f5; 
  border-radius: 15px; 
 

  
`;

export const TaskContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  flex: 1;
  margin-left: 10px; 
  
`;

export const TaskText = styled.Text`
  color: #13293D;
  font-size: 21px;
  font-weight: 600;
  flex-direction: column; 
`;

export const TaskDescri = styled.Text`
  color: #13293D;
  font-size: 14px;
  font-weight: 400; 
  margin-top: 5px;
`;

export const TaskTag = styled.TouchableOpacity`
  width: 25%; 
  height: 25px; 
  background-color: #006494;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 5px; 
  flex-direction: row; 
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 200;
  margin-left: 5px; 
  align-items: center;
`;
