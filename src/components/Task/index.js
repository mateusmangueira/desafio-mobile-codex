import React from 'react';

import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Left, Info, Name, Priority} from './styles';

export default function Task({data, onCancel, onEdit}) {
  return (
    <Container>
      <Left>
        <Info>
          <Name>Nome: {data.name}</Name>
          <Priority>Prioridade: {data.priority}</Priority>
        </Info>
      </Left>

      <TouchableOpacity onPress={onCancel}>
        <Icon name="delete" size={20} color="#f64c" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onEdit}>
        <Icon name="create" size={20} color="#f6" />
      </TouchableOpacity>
    </Container>
  );
}
