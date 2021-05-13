import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin: 30px;
  height: 46px;
  background: #3f2;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
