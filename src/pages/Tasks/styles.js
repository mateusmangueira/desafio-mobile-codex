import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const EmptyList = styled.Text`
  margin-top: 50px;
  font-size: 16px;
  font-style: italic;
  flex: 1;
  align-self: center;
  justify-content: center;
`;

export const ContainerTitle = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity``;

export const SortIcon = styled(Icon).attrs({name: 'sort'})`
  font-size: 30px;
  color: #3f3d56;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ff1065;
  font-weight: bold;
  margin-right: 10px;
`;

export const LogOutIcon = styled(Icon).attrs({name: 'logout'})`
  font-size: 30px;
  color: #3f3d56;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;
