import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row; /* Alinha os itens na horizontal */
    align-items: center; /* Alinha verticalmente no centro */
    background-color: #1B98E0; /* Cor de fundo da SearchBar */
    border-radius: 10px; /* Arredondamento das bordas */
    padding: 10px; /* Padding ao redor do conteúdo */
    margin: 16px 0; /* Margem superior e inferior */
    height: 64px;
`;

export const SearchInput = styled.TextInput`
    flex: 1; /* O input ocupa o espaço restante */
    color: #E8F1F2; /* Cor do texto */
    padding: 10px; /* Padding interno */
    font-size: 16px; /* Tamanho da fonte */
    border: none; /* Remove bordas padrão */
`;

export const SearchButton = styled.TouchableOpacity`
    padding: 8px; /* Padding para o botão de busca */ 
`;