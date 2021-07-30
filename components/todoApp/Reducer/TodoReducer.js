import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CHECK_TODO,
  ASYNCSTORAGE_TODO,
} from '../Action/Type';

const initialState = {
  todoList: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.data),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.key !== action.key),
      };
    case EDIT_TODO:
      state.todoList = action.data;
      return {
        ...state,
      };
    case CHECK_TODO:
      state.todoList = action.data;
      return {
        ...state,
      };
    case ASYNCSTORAGE_TODO:
      state.todoList = action.data;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default TodoReducer;
