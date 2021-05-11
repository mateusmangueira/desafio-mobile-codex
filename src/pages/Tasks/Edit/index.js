import React, {useState} from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  EditIcon,
  // eslint-disable-next-line import/no-unresolved
} from './styles';

const Edit = () => {
  const [name, setName] = useState('');

  return (
    <Container>
        <Form>
          <FormInput
            autoCorrect={false}
            placeholder="Novo nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />

          <SubmitButton /*loading={loading} onPress={handleSubmit}*/>
            <EditIcon />
            <Text> Editar tarefa</Text>
          </SubmitButton>
        </Form>
      </Container>
  )
};

export default Edit;
