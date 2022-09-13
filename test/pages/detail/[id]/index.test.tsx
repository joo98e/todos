import { beforeEach } from "@jest/globals";
import useReduxProvider from "@testing/fixtures/useReduxProvider";
import { STATUS_TODO } from "@store/slices/enums/STATUS_TODO";
import ToDoDetailRow from "@ui/detail/ToDoDetailRow";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("[pages]", () => {
  describe('route : "detail/[id]"', () => {
    const dummy = [
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
    ];
    let container;

    beforeEach(() => {
      container = useReduxProvider(
        <div data-testid={2}>
          {dummy.map((detail) => {
            return <ToDoDetailRow key={detail.id} detail={detail} />;
          })}
        </div>,
        {}
      );
    });

    it("rendered, isCompleted에 알맞는 2개의 Row를 렌더", () => {
      expect(screen.getByTestId(2).children).toHaveLength(2);

      const isCompletedRow = container.baseElement.querySelector("*[data-testid='2'] > *:nth-child(1)");
      const isInCompleteRow = container.baseElement.querySelector("*[data-testid='2'] > *:nth-child(2)");

      // isCompleted STATUS_TODO.INCOMPLETE(false)로 전달
      expect(isCompletedRow).toHaveTextContent("완료하기");
      expect(isInCompleteRow).toHaveTextContent("완료됨");
    });
  });
});
