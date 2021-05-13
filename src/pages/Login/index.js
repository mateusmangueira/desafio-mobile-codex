import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import {Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {LoginRequest} from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  LoginLink,
  LoginLinkText,
  Image,
} from './styles';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(LoginRequest(email, password));
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container>
        <Image />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            <Text>Entrar</Text>
          </SubmitButton>
        </Form>

        <LoginLink onPress={() => navigation.navigate('SignUp')}>
          <LoginLinkText>Crie sua conta</LoginLinkText>
        </LoginLink>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
