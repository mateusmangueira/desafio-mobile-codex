import {Platform} from 'react-native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  justify-content: center;
  font-size: 20px;
  color: #ff1065;
  font-weight: bold;
  align-self: auto;
  margin-top: 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  padding: 25px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
  background-color: #ff1065;
`;

export const EditIcon = styled(Icon).attrs({name: 'create'})`
  font-size: 16px;
  color: white;
  margin-right: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 50px;
`;
