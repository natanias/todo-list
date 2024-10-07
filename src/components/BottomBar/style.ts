import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 90px; /* Altura da BottomBar */
    flex-direction: row; /* Alinha os itens na horizontal */
    align-items: center; /* Alinha verticalmente no centro */
    justify-content: space-around; /* Distribui os botões uniformemente */
    position: absolute; /* Permite que a BottomBar fique fixada na parte inferior */
    bottom: 0; /* Posiciona na parte inferior */
    background-color: #006494; /* Cor de fundo da BottomBar */
    border-top-left-radius: 20px; /* Arredondamento do canto superior esquerdo */
    border-top-right-radius: 20px; /* Arredondamento do canto superior direito */
    overflow: hidden; /* Garante que os itens não ultrapassem os cantos arredondados */
`;

export const FloatButton = styled.TouchableOpacity`
    width: 60px; /* Largura do botão flutuante */
    height: 60px; /* Altura do botão flutuante */
    border-radius: 30px; /* Bordas arredondadas */
    background-color: #007BFF; /* Cor do botão flutuante */
    align-items: center; /* Alinha o ícone no centro */
    justify-content: center; /* Centraliza o ícone no botão */
    elevation: 5; /* Elevação para Android */
    bottom: 15px; /* Distância do fundo */
`;

export const IconButton = styled.TouchableOpacity`
    padding: 10px; /* Padding para os botões de ícone */
`;