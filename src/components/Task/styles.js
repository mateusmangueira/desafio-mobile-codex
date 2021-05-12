import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background-color: #cbccd1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  margin-left: 5px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: black;
`;

export const Priority = styled.Text`
  color: #636166;
  font-size: 15px;
  margin-top: 4px;
`;
