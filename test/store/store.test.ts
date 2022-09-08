import configureStore from "redux-mock-store";
import { PayloadAction } from "@reduxjs/toolkit";
import { IToDo } from "@store/slices/types/ToDo";
import { beforeEach } from "@jest/globals";
import useToDo from "@hooks/useToDo";
import { addToDoListAction } from "@store/slices/toDoSlice";

/**
 * 공통
 */
const middlewares = [];
const mockStore = configureStore(middlewares);
export const store = mockStore({});

describe(`[리덕스] 스토어`, function () {
  describe("toDoState", () => {
    const toDo = {
      id: 2,
      nickname: "액션 테스트",
      subject: "올바른 payload를 반환하는가?",
      desc: "설명란입니다.",
      list: [],
    };
    store.dispatch(addToDoListAction(toDo));
    const actions: PayloadAction<IToDo>[] = store.getActions();

    describe("addToDoList 액션 테스트", () => {
      it("보낸 인수 객체와 payload의 객체가 같아야 한다.", function () {
        expect(actions[0].payload).toEqual(toDo);
      });
    });
  });
});
