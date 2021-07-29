import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import TodoList from './TodoList';
import ModalPage from './ModalPage';
import {useDispatch, useSelector} from 'react-redux';
import {editTodo, checkTodo} from './Action/Todo';

export default function FilterAllComplete({navigation}) {
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
  const todos = useSelector(state => state.TodoReducer.todoList);
  const filterData = todos.filter(n1 => n1.isSelected === true);
  const closeModal = () => {
    setEditIndex(-1);
    setModalVisible(false);
  };
  const handleCheckBox = async id => {
    const data = [...todos];
    const findIndx = data.findIndex(n1 => n1.id === id);
    data[findIndx].isSelected = !data[findIndx].isSelected;
    dispatch(checkTodo(data));
    try {
      await AsyncStorage.setItem('TodoData', JSON.stringify(data));
    } catch (error) {}
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
    const dataSet = [...todos];
    dataSet[editIndex] = data;
    dispatch(editTodo(dataSet));
    try {
      await AsyncStorage.setItem('TodoData', JSON.stringify(dataSet));
    } catch (error) {}
    setTodoObject({
      id: '',
      title: '',
      date: 'Select Date',
      time: 'Select Time',
      createdAt: '',
      isSelected: false,
    });
    setEditIndex(-1);
    closeModal();
  };
  const handleEdit = async id => {
    const dataSet = [...todos];
    const findIndex = dataSet.findIndex(n1 => n1.id == id);
    setTodoObject(dataSet[findIndex]);
    setEditIndex(findIndex);
    setModalVisible(true);
  };
  return (
    <View>
      <TodoList
        Data={filterData}
        onEdit={handleEdit}
        onCheckBox={handleCheckBox}
        totalItem="Complete"
      />
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
