import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";



export const ContainerCardTask = styled.TouchableOpacity`
width: wp(100%);
height: hp(30%);
flex-direction: row;

`;



export const TaskText = styled.Text`
 color: #13293D;
 font-size: 21px;
  font-weight: 300;
`;

export const TaskDescri = styled.Text`
 color: #13293D;
 font-size: 14px;
  font-weight: 100;
`;

export const TaskTag = styled.TouchableOpacity`
width: 87px;
height: 14px;
background-color: #006494;
justify-content: center;
align-items: center;
`;