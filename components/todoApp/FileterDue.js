import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import TodoList from './TodoList';
import ModalPage from './ModalPage';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {editTodo, checkTodo} from './Action/Todo';

export default function FilterDue({navigation}) {
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
  const filterData = todos.filter(item => {
    const leftTime = moment(item.date + item.time, 'YYYY-MM-DDLT');
    const pastTime = moment(leftTime);
    const presentTime = moment(new Date());
    const duration = moment.duration(pastTime.diff(presentTime));
    return Math.ceil(duration.asMinutes()) <= 0;
  });

  const closeModal = () => {
    setEditIndex(-1);
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
    dataSet[editIndex] = data;
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
  const handleEdit = async id => {
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
  return (
    <View>
      <TodoList
        Data={filterData}
        onEdit={handleEdit}
        onCheckBox={handleCheckBox}
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
