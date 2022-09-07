import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoListInitialState } from "@common/types/ToDo";

const initialState: IToDoListInitialState = {
  toDos: [
    {
      id: 1,
      nickname: "ayaan",
      subject: "todos",
      desc: "refactoring",
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
    addToDoListAction(state, action: PayloadAction<IToDo>) {
      state.toDos.unshift(action.payload);
    },

    deleteToDoListAction() {},

    addToDoDetailAction(
      state,
      action: PayloadAction<{ nextToDoState: IToDo[] }>
    ) {
      state.toDos = action.payload.nextToDoState;
    },

    deleteDetailToDoAction() {},

    completedDetailToDoAction(
      state,
      action: PayloadAction<{ nextToDoState: IToDo[] }>
    ) {
      state.toDos = action.payload.nextToDoState;
    },
  },
});

const toDoState = toDoSlice.reducer;
export const addToDoListAction = toDoSlice.actions.addToDoListAction;
export const deleteToDoListAction = toDoSlice.actions.deleteToDoListAction;
export const addToDoDetailAction = toDoSlice.actions.addToDoDetailAction;
export const deleteDetailToDo = toDoSlice.actions.deleteDetailToDoAction;
export const completedDetailToDo = toDoSlice.actions.completedDetailToDoAction;

export default toDoState;
