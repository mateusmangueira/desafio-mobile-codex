import React from 'react';

import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Left, Right, Info, Name, Priority} from './styles';

export default function Task({data, onCancel, onEdit}) {
  return (
    <Container>
      <Left>
        <Info>
          <Name>{data.name}</Name>
          <Priority>{data.priority}</Priority>
        </Info>
      </Left>

      <Right>
        <TouchableOpacity onPress={onEdit}>
          <Icon name="create" size={20} color="#3F3D56" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onCancel}>
          <Icon name="delete" size={20} color="#3F3D56" />
        </TouchableOpacity>
      </Right>
    </Container>
  );
}
