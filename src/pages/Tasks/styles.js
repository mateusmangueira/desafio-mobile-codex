import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  margin: auto;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: auto;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;

export const LoadingTasks = styled.Text`
  margin-top: 10;
  margin-bottom: 10;
  color: rgba(0, 0, 0, 0.3);
  font-size: 14;
`;
