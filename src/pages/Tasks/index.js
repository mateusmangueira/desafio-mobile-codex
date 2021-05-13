import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getTasksRequest,
  deleteTaskRequest,
  sortTasks,
} from '../../store/modules/task/actions';

import {logout} from '../../store/modules/auth/actions';

import Button from '../../components/Button';
import ButtonLogout from '../../components/ButtonLogout';
import Task from '../../components/Task';

import {Container, Title, List} from './styles';

const Tasks = ({navigation}) => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const [tasks, setTasks] = useState(useSelector(state => state.task.tasks));

  useEffect(() => {
    async function getTasks() {
      const userId = await AsyncStorage.getItem('userId');
      dispatch(getTasksRequest(userId));
    }
    getTasks();
  }, []);

  async function handleDelete(id) {
    dispatch(deleteTaskRequest(id));
  }

  async function handleLogout() {
    dispatch(logout());
  }

  async function handleSort() {
    dispatch(sortTasks());
  }

  return (
    <Container>
      <Button onPress={() => handleSort()}>
        <Title>TAREFAS</Title>
      </Button>

      <List
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Task
            onCancel={() => handleDelete(item.id)}
            onEdit={() => navigation.navigate('Edit')}
            data={item}
          />
        )}
      />

      <Button onPress={() => navigation.navigate('Create')} loading={loading}>
        Nova Tarefa
      </Button>
      <ButtonLogout onPress={() => handleLogout()} loading={loading}>
        Deslogar
      </ButtonLogout>
    </Container>
  );
};

Tasks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Tasks;
