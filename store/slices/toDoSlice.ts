import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoListInitialState } from "@store/slices/types/ToDo";
import FILTER_BY_TODO_STATUS from "@store/slices/enums/FILTER_BY_TODO_STATUS";

const initialState: IToDoListInitialState = {
  toDos: [
    {
      id: 1,
      nickname: "Ayaan",
      subject: "todos",
      desc: "refactoring",
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
    addToDoListAction(state, action: PayloadAction<IToDo>) {
      state.toDos.unshift(action.payload);
    },

    deleteToDoListAction() {},

    addDetailToDoAction(state, action: PayloadAction<{ nextToDoState: IToDo[] }>) {
      state.toDos = action.payload.nextToDoState;
    },

    deleteDetailToDoAction() {},

    completedDetailToDoAction(state, action: PayloadAction<{ nextToDoState: IToDo[] }>) {
      state.toDos = action.payload.nextToDoState;
    },
  },
});

const toDoState = toDoSlice.reducer;
export const addToDoListAction = toDoSlice.actions.addToDoListAction;
export const deleteToDoListAction = toDoSlice.actions.deleteToDoListAction;

export const addDetailToDoAction = toDoSlice.actions.addDetailToDoAction;
export const deleteDetailToDoAction = toDoSlice.actions.deleteDetailToDoAction;
export const completedDetailToDoAction = toDoSlice.actions.completedDetailToDoAction;

export default toDoState;
