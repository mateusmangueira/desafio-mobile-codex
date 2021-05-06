import React, {useEffect, useState, useRef} from 'react';
import {
  Animated,
  Alert,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableHighlight,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SwipeListView} from 'react-native-swipe-list-view';

import {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
} from '../../store/modules/task/actions';

import Background from '../../components/Background';
import Button from '../../components/Button';

import {Container, Title, List, Task, LoadingTasks} from './styles';

const Tasks = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const [tasks, setTasks] = useState(
    useSelector(state => state.task.tasks) || [],
  );

  const animationIsRunning = useRef(false);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getTasks() {
      const userId = await AsyncStorage.getItem('userId');
      dispatch(getTasksRequest(userId));
    }
    getTasks();
  }, []);

  async function handleCreateTask(name, priority) {
    dispatch(createTaskRequest(name, priority));
  }

  async function handleDelete(id) {
    dispatch(deleteTaskRequest(id));
  }

  const rowTranslateAnimatedValues = {};
  Array(20)
    .fill('')
    .forEach((_, i) => {
      rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
    });

  const onSwipeValueChange = swipeData => {
    const {key, value} = swipeData;
    if (
      value < -Dimensions.get('window').width &&
      !animationIsRunning.current
    ) {
      animationIsRunning.current = true;
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...tasks];
        const prevIndex = tasks.findIndex(item => item.key === key);
        newData.splice(prevIndex, 1);
        setTasks(newData);
        animationIsRunning.current = false;
      });
    }
  };

  const renderItem = data => (
    <Animated.View
      style={[
        styles.rowFrontContainer,
        {
          height: rowTranslateAnimatedValues[data.item.key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50],
          }),
        },
      ]}>
      <TouchableHighlight
        onPress={() => console.log('You touched me - swipeList')}
        style={styles.rowFront}
        underlayColor="#AAA">
        <View>
          <Text>I am {data.item.text} in a SwipeListView</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </View>
    </View>
  );

  return (
    <Background>
      <Container>
        <Title>TAREFAS</Title>
        {loading ? <LoadingTasks>Carregando...</LoadingTasks> : null}
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </Modal>
        <Button
          onPress={() => handleCreateTask('teste', 'baixa')}
          loading={false}>
          Nova Tarefa
        </Button>

        <SwipeListView
          disableRightSwipe
          data={tasks}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          onSwipeValueChange={onSwipeValueChange}
        />
      </Container>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Tasks;
