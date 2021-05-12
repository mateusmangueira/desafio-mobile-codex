import React, {useState} from 'react';

import {Text, Picker, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { color } from 'react-native-reanimated';
// import { Container } from './styles';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  CreateIcon,
  Select
  // eslint-disable-next-line import/no-unresolved
} from './styles';

const Create = () => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <Container>
        <Form>
          <FormInput
            autoCorrect={false}
            placeholder="Nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            />

          <Picker placeholder="Prioridade" style={{ marginLeft: 25, color: '#ff1065' }} onValueChange={(priorityValue, priorityIndex) => setPriority(priorityValue)}>
            <Picker.item label="Alta" value="Alta" />
            <Picker.item label="Baixa" value="Baixa" />
          </Picker>

          <SubmitButton /*loading={loading} onPress={handleSubmit}*/>
            <CreateIcon />
            <Text> Criar tarefa</Text>
          </SubmitButton>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Create;
