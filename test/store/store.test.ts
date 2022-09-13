import configureStore from "redux-mock-store";
import { PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoListInitialState } from "@store/slices/types/ToDo";
import { afterEach, beforeEach } from "@jest/globals";
import useToDo from "@hooks/useToDo";
import { addDetailToDoAction, addToDoListAction, completedDetailToDoAction, deleteToDoListAction } from "@store/slices/toDoSlice";
import { STATUS_TODO } from "@store/slices/enums/STATUS_TODO";
import { cleanup } from "@testing-library/react";
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
          isCompleted: STATUS_TODO.INCOMPLETE,
        },
        {
          id: 2,
          title: "우산 접기",
          desc: "우산 물 털고 접기",
          isCompleted: STATUS_TODO.COMPLETE,
        },
      ],
    },
  ],
};
describe("[리덕스] 스토어 ", () => {
  describe("[toDoState]", () => {
    it("action - addToDoListAction", () => {
      const store = mockStore(initialState);
      const toDo = {
        id: 2,
        nickname: "액션 테스트",
        subject: "올바른 payload를 반환하는가?",
        desc: "설명란입니다.",
        list: [],
      };

      store.dispatch(addToDoListAction(toDo));
      const actions: PayloadAction<IToDo>[] = store.getActions();
      expect(actions[0].payload).toEqual(toDo);
    });

    it("action - addDetailToDoAction", () => {
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
              isCompleted: STATUS_TODO.INCOMPLETE,
            },
            {
              id: 2,
              title: "우산 접기",
              desc: "우산 물 털고 접기",
              isCompleted: STATUS_TODO.COMPLETE,
            },
            {
              id: 3,
              title: "add detail",
              desc: "detail",
              isCompleted: STATUS_TODO.INCOMPLETE,
            },
          ],
        },
      ];
      store.dispatch(addDetailToDoAction({ nextToDoState }));
      const actions: PayloadAction<{ nextToDoState: IToDo[] }>[] = store.getActions();
      const result = actions[0].payload.nextToDoState[0];
      expect(result).toEqual(nextToDoState[0]);
    });

    it("action - completedDetailToDoAction", () => {
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
              isCompleted: STATUS_TODO.COMPLETE,
            },
            {
              id: 4,
              title: "우산 접기",
              desc: "우산 물 털고 접기",
              isCompleted: STATUS_TODO.COMPLETE,
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
