import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 5px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #333;
`;

export const Priority = styled.Text`
  color: #333;
  font-size: 15px;
  margin-top: 4px;
`;
