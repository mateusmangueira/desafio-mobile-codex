import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getTasksRequest,
  deleteTaskRequest,
} from '../../store/modules/task/actions';

import Background from '../../components/Background';
import Button from '../../components/Button';

import {Container, Title, List, LoadingTasks} from './styles';

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
  }, []);

  async function handleDelete(id) {
    dispatch(deleteTaskRequest(id));
  }

  return (
    <Background>
      <Container>
        <Title>TAREFAS</Title>
        {loading ? <LoadingTasks>Carregando...</LoadingTasks> : null}
        <Button onPress={() => navigation.navigate('Create')} loading={false}>
          Nova Tarefa
        </Button>

        <List
          data={tasks}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <>
              <Text>{item.name}</Text>
              <Text>{item.priority}</Text>
            </>
          )}
        />
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
