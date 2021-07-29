import {ADD_TODO, DELETE_TODO, EDIT_TODO, CHECK_TODO} from './Type';

export const addTodo = tood => ({
  type: ADD_TODO,
  data: tood,
});

export const deleteTodo = key => ({
  type: DELETE_TODO,
  key: key,
});
export const editTodo = todo => ({
  type: EDIT_TODO,
  data: todo,
});
export const checkTodo = todo => ({
  type: CHECK_TODO,
  data: todo,
});
