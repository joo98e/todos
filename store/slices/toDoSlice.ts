import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoDetail, IToDoListInitialState } from "./types";

const initialState: IToDoListInitialState = {
  todos: [
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
          isCompleted: false,
        },
        {
          id: 2,
          title: "우산 접기",
          desc: "우산 물 털고 접기",
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
      state.todos.unshift(action.payload);
    },

    deleteToDoList() {},

    addDetailToDo(state, action: PayloadAction<{ nextToDoState: IToDo[] }>) {
      state.todos = action.payload.nextToDoState;
    },

    deleteDetailToDo() {},

    completedDetailToDo(
      state,
      action: PayloadAction<{ nextToDoState: IToDo[] }>
    ) {
      state.todos = action.payload.nextToDoState;
    },
  },
});

const toDoState = toDoSlice.reducer;
export const addToDoList = toDoSlice.actions;
export const deleteToDoList = toDoSlice.actions;
export const addDetailToDo = toDoSlice.actions.addDetailToDo;
export const deleteDetailToDo = toDoSlice.actions.deleteDetailToDo;
export const completedDetailToDo = toDoSlice.actions.completedDetailToDo;

export default toDoState;
