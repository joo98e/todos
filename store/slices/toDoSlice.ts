import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoListInitialState } from "@common/types/ToDo";

const initialState: IToDoListInitialState = {
  toDos: [
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
      state.toDos.unshift(action.payload);
    },

    deleteToDoList() {},

    addToDoDetail(state, action: PayloadAction<{ nextToDoState: IToDo[] }>) {
      state.toDos = action.payload.nextToDoState;
    },

    deleteDetailToDo() {},

    completedDetailToDo(
      state,
      action: PayloadAction<{ nextToDoState: IToDo[] }>
    ) {
      state.toDos = action.payload.nextToDoState;
    },
  },
});

const toDoState = toDoSlice.reducer;
export const addToDoList = toDoSlice.actions.addToDoList;
export const deleteToDoList = toDoSlice.actions.deleteToDoList;
export const addToDoDetail = toDoSlice.actions.addToDoDetail;
export const deleteDetailToDo = toDoSlice.actions.deleteDetailToDo;
export const completedDetailToDo = toDoSlice.actions.completedDetailToDo;

export default toDoState;
