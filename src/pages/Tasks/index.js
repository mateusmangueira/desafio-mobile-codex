import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getTasksRequest,
  deleteTaskRequest,
} from '../../store/modules/task/actions';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Task from '../../components/Task';
import Loading from '../../components/Loading';

import {Container, Title, List, Logout} from './styles';

const Tasks = ({navigation}) => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const [tasks, setTasks] = useState(
    useSelector(state => state.task.tasks) || [],
  );

  useEffect(() => {
    async function getTasks() {
      const userId = await AsyncStorage.getItem('userId');
      dispatch(getTasksRequest(userId));
    }
    getTasks();
  }, [tasks]);

  async function handleDelete(id) {
    dispatch(deleteTaskRequest(id));
  }

  return (
    <Background>
      <Container>
        <Title>TAREFAS</Title>

        <List
          data={tasks}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Task
              onCancel={() => handleDelete(item.id)}
              onEdit={() => navigation.navigate('Edit', item)}
              data={item}
            />
          )}
        />

        <Button onPress={() => navigation.navigate('Create')} loading={false}>
          Nova Tarefa
        </Button>
      </Container>
    </Background>
  );
};

Tasks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Tasks;
