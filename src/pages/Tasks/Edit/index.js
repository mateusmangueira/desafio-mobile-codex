import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Text, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import {updateTaskRequest} from '../../../store/modules/task/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  EditIcon,
  // eslint-disable-next-line import/no-unresolved
} from './styles';

const Edit = ({route}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  // const id = ???? // como pegar o ID da task para passar no parametro da rota na api ??? essa duvida ta peso

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  async function handleEditTask() {
    dispatch(updateTaskRequest(name, priority, '609c3fe2db4af30015c99651'));
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container>
        <Title>EDITAR TAREFA</Title>
        <Form>
          <FormInput
            autoCorrect={false}
            placeholder="Novo nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />

          <Picker
            placeholder="Prioridade"
            style={{marginLeft: 25, color: '#ff1065'}}
            onValueChange={priorityValue => setPriority(priorityValue)}>
            <Picker.item label="Alta" value="Alta" />
            <Picker.item label="Baixa" value="Baixa" />
          </Picker>

          <SubmitButton loading={loading} onPress={() => handleEditTask()}>
            <EditIcon />
            <Text> Editar tarefa</Text>
          </SubmitButton>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Edit;
