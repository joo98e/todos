import configureStore from "redux-mock-store";
import { PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoListInitialState } from "@store/slices/types/ToDo";
import { afterEach, beforeEach } from "@jest/globals";
import useToDo from "@hooks/useToDo";
import { addDetailToDoAction, addToDoListAction, completedDetailToDoAction, deleteToDoListAction } from "@store/slices/toDoSlice";
import { cleanup } from "@testing-library/react";
import { useSelector } from "react-redux";
import store, { RootState } from "@store/index";

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
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
describe("[리덕스] 스토어 ", () => {
  describe("[toDoState]", () => {
    it("addToDoListAction, 액션을 취하면 todo list에 항목이 1개 추가 및 저장", async () => {
      const toDo = {
        id: 2,
        nickname: "액션 테스트",
        subject: "올바른 payload를 반환하는가?",
        desc: "설명란입니다.",
        list: [],
      };

      await store.dispatch(addToDoListAction(toDo));

      expect(store.getState().toDoState.toDos.length).toEqual(2);
    });

    it("addDetailToDoAction, 액션을 취하면 ToDo 항목이 1개 추가 및 저장", () => {
      const store = mockStore(initialState);
      const nextToDoState = [
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
              isCompleted: false,
            },
            {
              id: 2,
              title: "우산 접기",
              desc: "우산 물 털고 접기",
              isCompleted: true,
            },
            {
              id: 3,
              title: "add detail",
              desc: "detail",
              isCompleted: false,
            },
          ],
        },
      ];
      store.dispatch(addDetailToDoAction({ nextToDoState }));
      const actions: PayloadAction<{ nextToDoState: IToDo[] }>[] = store.getActions();
      const result = actions[0].payload.nextToDoState[0];
      expect(result).toEqual(nextToDoState[0]);
    });

    it("completedDetailToDoAction, 액션을 취하면 ToDo 항목이 1개 완료 처리", () => {
      const store = mockStore(initialState);
      const nextToDoState = [
        {
          id: 1,
          nickname: "Ayaan",
          subject: "todos",
          desc: "refactoring",
          list: [
            {
              id: 3,
              title: "물 주기",
              desc: "식물에 물 주기",
              isCompleted: true,
            },
            {
              id: 4,
              title: "우산 접기",
              desc: "우산 물 털고 접기",
              isCompleted: false,
            },
          ],
        },
      ];

      store.dispatch(completedDetailToDoAction({ nextToDoState }));
      const actions: PayloadAction<{ nextToDoState: IToDo[] }>[] = store.getActions();
      const result = actions[0].payload.nextToDoState[0];

      // action으로 받아온 객체와 인수로 보낸 객체가 같다.
      expect(result).toEqual(nextToDoState[0]);
    });
  });
});
