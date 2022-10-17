import {createSlice, configureStore, combineReducers} from '@reduxjs/toolkit';
import todoList, {objType} from './todoReducer';

const reducer = combineReducers({
  todoList,
});

console.log(typeof reducer);

export type RootState = ReturnType<typeof reducer>;
export default configureStore({reducer});
