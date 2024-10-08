import React, { useState } from 'react';
import styled from 'styled-components/native';


export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  width: 80%;
  padding: 20px;
  background-color: #00a1ff;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.TextInput`
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  color: white;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  flex: 1;
  margin-right: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: black;
  text-align: center;
`;





