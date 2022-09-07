import configureStore from "redux-mock-store";
import { addToDoList } from "@store/slices/toDoSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { IToDo } from "@common/types/ToDo";
import { beforeEach } from "@jest/globals";
// jest.mock("useToDo");

/**
 * 공통
 */
const middlewares = [];
const mockStore = configureStore(middlewares);
export const store = mockStore({});

const addTodo = () => ({ type: "ADD_TODO" });

describe(`리덕스 스토어`, function () {
  describe("toDoState", () => {
    const toDo = {
      id: 2,
      nickname: "액션 테스트",
      subject: "올바른 payload를 반환하는가?",
      desc: "설명란입니다.",
      list: [],
    };
    store.dispatch(addToDoList(toDo));

    const actions: PayloadAction<IToDo>[] = store.getActions();

    describe("addToDoList 액션 테스트", () => {
      it("보낸 인수 객체와 payload의 객체가 같아야 한다.", function () {
        expect(actions[0].payload).toEqual(toDo);
      });
    });
  });
});
