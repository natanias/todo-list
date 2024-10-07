import React from 'react';
import { Container, SearchInput, SearchButton } from './style';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
    query: string;
    onChange: (text: string) => void; // Função chamada ao mudar o texto
    onSearch: () => void; // Função chamada ao pressionar o botão de busca
}

export function SearchBar({ query, onChange, onSearch }: SearchBarProps) {
    return (
        <Container>
            <SearchInput
                placeholder="Buscar tarefas..."
                value={query}
                onChangeText={onChange} // Chama a função ao mudar o texto
            />
            <SearchButton onPress={onSearch}>
                <Feather name="search" size={24} color="#fff" />
            </SearchButton>
        </Container>
    );
}