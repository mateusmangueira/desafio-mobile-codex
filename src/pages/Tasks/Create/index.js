import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, Picker, TouchableWithoutFeedback, Keyboard} from 'react-native';

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
  const [priority, setPriority] = useState('');

  async function handleCreateTask() {
    dispatch(createTaskRequest(name, priority));
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
            placeholder="Prioridade"
            style={{marginLeft: 25, color: '#ff1065'}}
            onValueChange={(priorityValue, priorityIndex) =>
              setPriority(priorityValue)
            }>
            <Picker.item label="Alta" value="Alta" />
            <Picker.item label="Baixa" value="Baixa" />
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

export default Create;
