import React, {useState} from 'react';

import {Text} from 'react-native'
// import { Container } from './styles';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  CreateIcon
  // eslint-disable-next-line import/no-unresolved
} from './styles';

const Create = () => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <Container>
        <Form>
          <FormInput
            autoCorrect={false}
            placeholder="Nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />

          <FormInput
            autoCorrect={false}
            placeholder="Prioridade"
            returnKeyType="next"
            value={priority}
            onChangeText={setPriority}
          />

          <SubmitButton /*loading={loading} onPress={handleSubmit}*/>
            <CreateIcon />
            <Text> Criar tarefa</Text>
          </SubmitButton>
        </Form>
      </Container>
  );
};

export default Create;
