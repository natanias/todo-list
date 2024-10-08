import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';




export const FloatingButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  right: 35px;
  align-items: center;
  justify-content: center;
`;

export const FloatingButton = styled(TouchableOpacity)`
  background-color: #13293d;
  width: 64px;
  height: 64px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  position: absolute;
`;