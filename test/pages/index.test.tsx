import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import MakeGrid from "@ui/grid/MakeGrid";
import Card from "@ui/todo/Card";
import AddCard from "@ui/todo/AddCard";
import "@testing-library/jest-dom";
import exp from "constants";
import { afterEach, beforeEach } from "@jest/globals";
import useTestContainer from "@testing/fixtures/useTestContainer";

describe(`[pages]`, function () {
  const toDoList = [
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
  ];
  let container;

  beforeEach(() => {
    container = useTestContainer(
      <MakeGrid data-testid={"CardWrapper"} column={3} gap={24}>
        {toDoList.map((item, idx) => {
          return <Card key={idx} id={item.id} nickname={item.nickname} subject={item.subject} desc={item.desc} list={item.list} />;
        })}
      </MakeGrid>
    );
  });

  afterEach(() => {
    container = null;
  });

  describe(`route : "/"`, function () {
    it("투두 리스트를 가지고 있으면 투두 리스트를 반환한다.", function () {
      expect(container).toHaveTextContent("todo-todos");
    });

    it("Map 함수를 실행한 만큼의 카드 개수가 존재한다. ", function () {
      expect(screen.getByTestId("CardWrapper").children.length).toEqual(2);
    });

    it("빈 배열이라면, 카드 컴포넌트가 없어야 한다. ", function () {
      const anotherContainer = useTestContainer(
        <MakeGrid data-testid={"CardWrapper"} column={3} gap={24}>
          {[].map((item, idx) => {
            return <Card key={idx} id={item.id} nickname={item.nickname} subject={item.subject} desc={item.desc} list={item.list} />;
          })}
        </MakeGrid>
      );

      expect(anotherContainer.querySelector('*[data-testid="CardWrapper"]').children.length).toEqual(0);
    });
  });
});
