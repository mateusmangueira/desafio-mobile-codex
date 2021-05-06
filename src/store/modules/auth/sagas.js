/* eslint-disable import/no-cycle */
import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {LoginSuccess, signFailure} from './actions';
import api from '../../../services/api';

export function* login({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    if (response.error) {
      Alert.alert('Erro no login', 'Houve algum erro interno no servidor');
    }

    const {token, user} = response.data;

    yield put(LoginSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'E-mail ou senha incorretos.');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    Alert.alert('Sucesso!', 'Sua conta foi criada.');
  } catch (err) {
    Alert.alert('Falha no cadastro. Verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  Alert.alert('Deslogado com sucesso!');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
