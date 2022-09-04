import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoDetail, IToDoListInitialState } from "./types";

const initialState: IToDoListInitialState = {
  todo: [
    {
      id: 1,
      nickname: "A",
      subject: "todos",
      desc: "todo-todos",
      list: [
        {
          id: 1,
          title: "할 일 1",
          desc: "이것",
          isCompleted: false,
        },
        {
          id: 2,
          title: "할 일 2",
          desc: "저것",
          isCompleted: true,
        },
      ],
    },
  ],
};

const toDoSlice = createSlice({
  name: "todo-list",
  initialState,
  reducers: {
    addToDoList(state, action: PayloadAction<IToDo>) {
      state.todo.unshift(action.payload);
    },

    DeleteToDoList() {},

    addDetailTodo(
      state,
      action: PayloadAction<{ current: IToDo; todo: IToDoDetail }>
    ) {
      const nextState = action.payload.current;
      nextState.list.unshift(action.payload.todo);
    },

    deleteDetailTodo() {},

    completedDetailTodo(
      state,
      action: PayloadAction<{ current: IToDo; todo: IToDoDetail }>
    ) {
      const nextState = action.payload.current;
      nextState.list.unshift(action.payload.todo);
    },
  },
});
export const { addToDoList, DeleteToDoList } = toDoSlice.actions;
export default toDoSlice.reducer;
