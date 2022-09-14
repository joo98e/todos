import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import GridOrg from "@components/organisms/toDoList/GridOrg";
import Card from "@components/molecules/toDoList/Card";
import AddToDoCard from "@components/molecules/toDoList/AddToDoCard";
import exp from "constants";
import { afterEach, beforeEach } from "@jest/globals";
import useCustomProvider from "../fixtures/useCustomProvider";

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
      id: 2,
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
    container = useCustomProvider(
      <GridOrg data-testid={"CardWrapper"} column={3} gap={24}>
        {toDoList.map((item) => {
          return <Card key={item.id} id={item.id} nickname={item.nickname} subject={item.subject} desc={item.desc} list={item.list} />;
        })}
      </GridOrg>
    );
  });

  afterEach(() => {
    container = null;
  });

  describe(`route : "/"`, function () {
    it("투두 리스트를 가지고 있으면 투두 리스트를 반환", function () {
      expect(container).toHaveTextContent("todo-todos");
    });

    it("Map 함수를 실행한 만큼의 카드 개수가 존재", function () {
      expect(screen.getByTestId("CardWrapper").children.length).toEqual(2);
    });

    it("빈 배열이라면, 카드 컴포넌트가 없음", function () {
      const anotherContainer = useCustomProvider(
        <GridOrg data-testid={"CardWrapper"} column={3} gap={24}>
          {[].map((item) => {
            return <Card key={item.id} id={item.id} nickname={item.nickname} subject={item.subject} desc={item.desc} list={item.list} />;
          })}
        </GridOrg>
      );

      expect(anotherContainer.querySelector('*[data-testid="CardWrapper"]').children.length).toEqual(0);
    });
  });
});
