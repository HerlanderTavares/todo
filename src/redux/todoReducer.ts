import {createSlice} from '@reduxjs/toolkit';

export interface objType {
  id: string;
  description: string;
  date?: string;
  time?: string;
}

const initialState: objType[] = [];

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const obj: objType = {
        id: `T${state.length + 1}`,
        description: action.payload.description,
        date: action.payload.date,
        time: action.payload.time,
      };

      state.push(obj);
      (() => localStorage.setItem('todo_list', JSON.stringify(state)))();
    },

    removeTodo: (state, action) => {
      const arr = state.filter(todo => todo.id !== action.payload.id);
      (() => localStorage.setItem('todo_list', JSON.stringify(arr)))();
      return arr;
    },

    getStoredList: (state, action) => (state = action.payload),
  },
});

export const {addTodo, removeTodo, getStoredList} = slice.actions;
export default slice.reducer;
