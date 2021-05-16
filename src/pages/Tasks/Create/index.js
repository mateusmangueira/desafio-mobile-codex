/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';

import PropTypes from 'prop-types';

import {useDispatch, useSelector} from 'react-redux';

import {Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {createTaskRequest} from '../../../store/modules/task/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  CreateIcon,
  // eslint-disable-next-line import/no-unresolved
} from './styles';

const Create = ({navigation}) => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Baixa');

  async function handleCreateTask() {
    dispatch(createTaskRequest(name, priority));
    navigation.navigate('Tasks');
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container>
        <Title>NOVA TAREFA</Title>
        <Form>
          <FormInput
            autoCorrect={false}
            placeholder="Nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />

          <Picker
            style={{marginLeft: 25, color: '#ff1065'}}
            selectedValue={priority}
            onValueChange={(priorityValue, priorityIndex) =>
              setPriority(priorityValue)
            }>
            <Picker.item label="Baixa" value="Baixa" />
            <Picker.item label="Alta" value="Alta" />
          </Picker>

          <SubmitButton loading={loading} onPress={() => handleCreateTask()}>
            <CreateIcon />
            <Text> Criar tarefa</Text>
          </SubmitButton>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Create.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Create;
