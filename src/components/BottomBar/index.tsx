import React from 'react';
import { Container, FloatButton, IconButton } from './style';
import { Feather } from '@expo/vector-icons';

interface BottomBarProps {
    onFloatButtonPress: () => void; // Função chamada ao pressionar o botão flutuante
    onIconPress: (iconName: string) => void; // Função chamada ao pressionar os ícones
}

export function BottomBar({ onFloatButtonPress, onIconPress }: BottomBarProps) {
    return (
        <Container>
            <IconButton onPress={() => onIconPress('icon1')}>
                <Feather name="home" size={24} color="#E8F1F2" />
            </IconButton>
            <IconButton onPress={() => onIconPress('icon2')}>
                <Feather name="star" size={24} color="#E8F1F2" />
            </IconButton>
            
            <FloatButton onPress={onFloatButtonPress}>
                <Feather name="plus" size={24} color="white" />
            </FloatButton>
            
            <IconButton onPress={() => onIconPress('icon3')}>
                <Feather name="bell" size={24} color="#E8F1F2" />
            </IconButton>
            <IconButton onPress={() => onIconPress('icon4')}>
                <Feather name="settings" size={24} color="#E8F1F2" />
            </IconButton>
        </Container>
    );
}