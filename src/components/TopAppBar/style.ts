import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    elevation: 5;
    padding-top: ${StatusBar.currentHeight}px; /* Adiciona o padding-top */
`;

export const Title = styled.Text`
    flex: 1;
    color: #13293D;
    font-size: 20px;
    text-align: center;
`;

export const MenuButton = styled.TouchableOpacity`
    padding: 12px;
`;

export const UserImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;
