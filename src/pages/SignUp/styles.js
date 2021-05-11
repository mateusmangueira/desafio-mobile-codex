import {Platform} from 'react-native';

import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Image = styled.Image.attrs({ source: require('../../assets/signUp.png') })`
  max-height: 35%;
  max-width: 70%;
  border-radius: 10px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  padding: 25px;
`;

export const FormInput = styled(Input)`
  background-color: #ff1065;
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: -24px;
`;

export const SignUpLinkText = styled.Text`
  color: #3F3D56;
  font-weight: bold;
  font-size: 16px;
`;
