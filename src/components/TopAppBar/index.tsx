import React from 'react';
import { Container, Title, MenuButton, UserImage } from './style';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

interface TopBarProps {
    onMenuPress: () => void;
    userImage: string; // URL ou caminho da imagem do usuário
}

export function TopBar({ onMenuPress, userImage }: TopBarProps) {
    return (
        <Container>
            <MenuButton onPress={onMenuPress}>
                <Feather name="menu" size={24} color="#13293D" />
            </MenuButton>
            <Title>MasterTasks</Title>
            <UserImage source={{ uri: userImage }} />
        </Container>
    );
}