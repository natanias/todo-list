import styled from 'styled-components/native';


export const Container = styled.View`
    height: 229px; /* Definindo a altura do BottomSheet */
    background-color: #006494; /* Cor de fundo do BottomSheet */
    justify-content: center; /* Centraliza o conteúdo */
    padding: 20px; /* Padding ao redor do conteúdo */
    position: absolute; /* Para fixar na parte inferior */
    bottom: 0; /* Posiciona na parte inferior da tela */
    left: 0; /* Alinha à esquerda */
    right: 0; /* Alinha à direita */
    border-top-left-radius: 20px; /* Arredondamento do canto superior esquerdo */
    border-top-right-radius: 20px; /* Arredondamento do canto superior direito */
`;
export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px; /* Espaço abaixo do título */
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    top: 20px; /* Distância do topo */
    right: 20px; /* Distância da direita */
`;