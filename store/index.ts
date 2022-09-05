import { configureStore, createStore } from "@reduxjs/toolkit";
import toDoState from "./slices/toDoSlice";

const store = configureStore({
  reducer: {
    toDoState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
