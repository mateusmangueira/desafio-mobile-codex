import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Text, TouchableWithoutFeedback, Keyboard} from 'react-native';

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

const Edit = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const id = navigation.getParam('id');

  const [name, setName] = useState('');

  async function handleEditTask() {
    dispatch(updateTaskRequest(name, id));
    navigation.navigate('Tasks');
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
