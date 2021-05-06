/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import {store} from '../store';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8081', // Android pelo emulador, se for genymotion 10.0.3.2 e se for via USB usa o ip da rede
});

api.interceptors.request.use(async config => {
  const {token} = store.getState().auth;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
