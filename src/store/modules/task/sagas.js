/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */
import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../services/api';

import {
  createTaskSuccess,
  createTaskFailure,
  getTasksSuccess,
  getTasksFailed,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  sortTasks,
} from './actions';

export function* createTask({payload}) {
  try {
    const response = yield call(api.post, '/tasks', payload);

    yield put(createTaskSuccess(response.data.data.task));

    Alert.alert('Sucesso!', 'Tarefa criada com sucesso.');
  } catch (error) {
    Alert.alert('Ops!', 'Houve algum problema ao criar a tarefa');
    yield put(createTaskFailure());
  }
}

export function* getTasks() {
  try {
    const response = yield api.get('/tasks');

    if (response) {
      yield put(getTasksSuccess(response.data.data.tasks));
    }
  } catch (error) {
    Alert.alert('Ops!', 'Falha ao carregar suas tarefas');
    yield put(getTasksFailed());
  }
}

export function* updateTask({payload}) {
  try {
    const {name, priority, _id} = payload;

    const task = {
      name,
      priority,
    };

    const response = yield call(api.put, `/tasks/${_id}`, task);
    Alert.alert('Sucesso!', 'Tarefa editada com sucesso.');
    yield put(updateTaskSuccess(response.data.data.task));
  } catch (error) {
    Alert.alert('Ops!', 'Houve algum erro ao atualizar tarefa');
    yield put(updateTaskFailure());
  }
}

export function* deleteTask({payload}) {
  try {
    const {_id} = payload;
    const response = yield call(api.delete, `/tasks/${_id}`);

    if (response) {
      Alert.alert('Sucesso!', 'Tarefa deletada com sucesso.');
    } else {
      Alert.alert('Ops!', 'Houve algum problema ao deletar a tarefa');
    }

    yield put(deleteTaskSuccess(response.data.data.task));
  } catch (error) {
    yield put(deleteTaskFailure());
  }
}

export function* sort({payload}) {
  const response = yield call(api.get, '/tasks/sort', payload);

  if (!response) {
    Alert.alert('Ops!', 'Houve erro na ordenação das tarefas');
  }

  yield put(sortTasks(response.data.data.tasks));
}

export default all([
  takeLatest('@task/CREATE_TASK_REQUEST', createTask),
  takeLatest('@task/GET_TASKS_REQUEST', getTasks),
  takeLatest('@task/UPDATE_TASK_REQUEST', updateTask),
  takeLatest('@task/DELETE_TASK_REQUEST', deleteTask),
  takeLatest('@task/SORT_TASKS', sort),
]);
