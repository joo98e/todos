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
          title: "물 주기",
          desc: "식물에 물 주기",
          isCompleted: true,
        },
        {
          id: 2,
          title: "우산 접기",
          desc: "우산 물 털고 접기",
          isCompleted: false,
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
      action: PayloadAction<{ toDoId: number; detailToDo: IToDoDetail }>
    ) {
      action.payload.detailToDo.id;
    },

    deleteDetailTodo() {},

    completedDetailTodo(
      state,
      action: PayloadAction<{ current: IToDo; todo: IToDoDetail }>
    ) {},
  },
});
export const { addToDoList, DeleteToDoList, addDetailTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
