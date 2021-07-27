import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TodoList from './TodoList';
import ModalPage from './ModalPage';
import moment from 'moment';

export default function FilterDue() {
  const [editIndex, setEditIndex] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setcount] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(async () => {
    const data = JSON.parse((await AsyncStorage.getItem('TodoData')) || '[]');
    const filterData = data.filter(item => {
      const leftTime = moment(item.date + item.time, 'YYYY-MM-DDLT');
      const pastTime = moment(leftTime);
      const presentTime = moment(new Date());
      const duration = moment.duration(pastTime.diff(presentTime));
      return Math.ceil(duration.asMinutes()) <= 0;
    });
    setData(filterData);
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
    setcount;
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