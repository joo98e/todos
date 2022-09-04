import { createSlice } from '@reduxjs/toolkit'
import { IToDoListInitialState } from './types'

const initialState: IToDoListInitialState = {
  todo: [
    {
      id: 1,
      nickname: 'A',
      subject: 'todos',
      desc: 'todo-todos',
      list: [
        {
          id: 1,
          title: '할 일 1',
          desc: '이것',
          isCompleted: false,
        },
        {
          id: 2,
          title: '할 일 2',
          desc: '저것',
          isCompleted: true,
        },
      ],
    },
  ],
}

const toDoSlice = createSlice({
  name: 'todo-list',
  initialState,
  reducers: {
    addToDoList(state, action) {
      state.todo.unshift(action.payload)
    },

    DeleteToDoList() {},
  },
})
export const { addToDoList, DeleteToDoList } = toDoSlice.actions
export default toDoSlice.reducer
