import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import {useDispatch, useSelector} from 'react-redux';

import {TouchableWithoutFeedback, Keyboard} from 'react-native';

import Background from '../../components/Background';
import {signUpRequest} from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
  Image,
  // eslint-disable-next-line import/no-unresolved
} from './styles';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Background>
        <Container>
          <Image />
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />

            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="E-mail"
              ref={emailRef}
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
              Cria conta
            </SubmitButton>
          </Form>

          <SignUpLink onPress={() => navigation.navigate('Login')}>
            <SignUpLinkText>Já possui conta?</SignUpLinkText>
          </SignUpLink>
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
