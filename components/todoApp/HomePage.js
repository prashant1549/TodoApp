import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import plus from '../../assets/plus.png';
import AsyncStorage from '@react-native-community/async-storage';
import ModalPage from './ModalPage';
import {useDispatch} from 'react-redux';
import {addTodo} from './Action/Todo';

export default function HomePage() {
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [todoObject, setTodoObject] = useState(
    {
      id: '',
      title: '',
      date: 'Select Date',
      time: 'Select Time',
      createdAt: '',
      isSelected: false,
    },
    [],
  );

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleChnage = value => {
    const data = {...todoObject};
    data.title = value;
    setTodoObject(data);
  };
  const handleSelectDate = value => {
    const data = {...todoObject};
    data.date = value;
    setTodoObject(data);
  };
  const handleTime = time => {
    const data = {...todoObject};
    data.time = time;
    setTodoObject(data);
  };
  const handleSubmit = async () => {
    const data = {...todoObject};
    const todoData = JSON.parse(
      (await AsyncStorage.getItem('TodoData')) || '[]',
    );

    if (data.title == '') {
      closeModal();
    } else {
      data.id = Math.floor(Math.random() * 1000 + 1);
      data.createdAt = new Date();
      todoData.push(data);
      dispatch(addTodo(data));
      try {
        await AsyncStorage.setItem('TodoData', JSON.stringify(todoData));
      } catch (error) {}
      setTodoObject({
        id: '',
        title: '',
        date: 'Select Date',
        time: 'Select Time',
        createdAt: '',
        isSelected: false,
      });
      closeModal();
    }
  };

  return (
    <View>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Today</Text>
        </View>
        <View style={styles.end}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={plus} style={styles.image}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ModalPage
        modalVisible={modalVisible}
        callBack={closeModal}
        editIndex={editIndex}
        handleSelectDate={handleSelectDate}
        handleChnage={handleChnage}
        handleTime={handleTime}
        onSubmit={handleSubmit}
        todoObject={todoObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  image: {
    width: 30,
    height: 30,
  },
  end: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
