import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from './TodoList';
import ModalPage from './ModalPage';
import {editTodo, checkTodo} from './Action/Todo';

export default function FilterAll({navigation}) {
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
  const handleSubmit = () => {
    const data = {...todoObject};
    const dataSet = [...todos];
    const findIndx = dataSet.findIndex(n1 => n1.id === data.id);
    dataSet[findIndx] = data;
    dispatch(editTodo(dataSet));
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
  const handleEdit = id => {
    const dataSet = [...todos];
    const findIndex = dataSet.findIndex(n1 => n1.id == id);
    setTodoObject(dataSet[findIndex]);
    setEditIndex(findIndex);
    setModalVisible(true);
  };
  const handleCheckBox = id => {
    const data = [...todos];
    const findIndx = data.findIndex(n1 => n1.id === id);
    data[findIndx].isSelected = !data[findIndx].isSelected;
    dispatch(checkTodo(data));
  };
  console.log(todos);
  return (
    <View>
      <TodoList Data={todos} onEdit={handleEdit} onCheckBox={handleCheckBox} />
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
