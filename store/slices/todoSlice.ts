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
      state.todo.unshift(action.payload);
    },

    DeleteToDoList() {},

    addDetailToDo(state, action: PayloadAction<{ nextToDoState: IToDo[] }>) {
      state.todo = action.payload.nextToDoState;
    },

    deleteDetailToDo() {},

    completedDetailToDo(
      state,
      action: PayloadAction<{ nextToDoState: IToDo[] }>
    ) {
      state.todo = action.payload.nextToDoState;
    },
  },
});
export const {
  addToDoList,
  DeleteToDoList,
  addDetailToDo,
  completedDetailToDo,
} = toDoSlice.actions;
export default toDoSlice.reducer;
