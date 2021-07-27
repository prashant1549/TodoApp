import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TodoList from './TodoList';
import ModalPage from './ModalPage';

export default function FilterAll() {
  const [editIndex, setEditIndex] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [Data, setData] = useState([]);

  useEffect(async () => {
    const data = JSON.parse((await AsyncStorage.getItem('TodoData')) || '[]');
    setData(data);
  }, [count]);
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleCheckBox = async (value, index) => {
    const todoData = JSON.parse(
      (await AsyncStorage.getItem('TodoData')) || '[]',
    );
    const findIndex = todoData.findIndex(n1 => n1.title == Data[index].title);
    todoData[findIndex].isSelected = value;
    try {
      await AsyncStorage.setItem('TodoData', JSON.stringify(todoData));
    } catch (error) {
      // Error saving data
    }
    setCount(count + 1);
  };
  const handleEdit = index => {
    setEditIndex(index);
    setModalVisible(true);
  };
  return (
    <View>
      <TodoList Data={Data} onEdit={handleEdit} onCheckBox={handleCheckBox} />
      <ModalPage
        modalVisible={modalVisible}
        callBack={closeModal}
        editIndex={editIndex}
      />
    </View>
  );
}
