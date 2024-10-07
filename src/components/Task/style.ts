import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: auto; /* Permite que a altura se ajuste ao conteúdo */
    flex-direction: row; /* Alinha os itens na horizontal */
    align-items: center; /* Alinha verticalmente no centro */
    background-color: #E8F1F2;
    border-radius: 12px;
    elevation: 5; /* Elevação para Android */
    overflow: hidden;
    padding: 12px; /* Padding ao redor do container */
`;

export const TaskDetails = styled.View`
    flex: 1; /* Permite que o título e descrição ocupem o espaço restante */
    margin-left: 12px; /* Espaço entre o ícone e o texto */
    flex-direction: column; /* Alinha o título e a descrição verticalmente */
`;

export const TaskTitle = styled.Text`
    color: #13293D;
    font-size: 20px;
`;

export const TaskDescription = styled.Text`
    color: #555; /* Cor da descrição */
    font-size: 16px;
    margin-top: 4px; /* Espaço entre o título e a descrição */
`;

export const TaskDone = styled.TouchableOpacity`
    padding: 12px;
    /* Outros estilos, se necessário */
`;

export const TagButton = styled.TouchableOpacity`
    background-color: #007BFF; /* Cor do botão, ajuste conforme necessário */
    border-radius: 5px; /* Arredondar as bordas do botão */
    padding: 8px 12px; /* Padding do botão */
`;

export const TagText = styled.Text`
    color: white; /* Cor do texto do botão */
    font-size: 16px;
`;
