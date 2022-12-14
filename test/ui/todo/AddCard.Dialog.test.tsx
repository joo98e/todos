/**
 * @description AddToDoCard.Dialog.test 테스트
 * 2022/09/08 10:49 AM
 */
import { beforeEach, describe } from "@jest/globals";
import useReduxProvider from "../../fixtures/useReduxProvider";
import AddToDoCard from "@components/molecules/toDoList/AddToDoCard";
import { fireEvent } from "@testing-library/dom";
import { screen } from "@testing-library/react";

describe("UI 컴포넌트 - Dialog test <AddToDoCard />", () => {
  let container;

  beforeEach(() => {
    container = useReduxProvider(<AddToDoCard />, {});
  });

  it("버튼을 누르면 children이 담긴 팝업이 열림", () => {
    const addButton = container.getByText("추가하기");
    fireEvent.click(addButton);

    /**
     * jest-setup.ts, tsconfig.json / dep => "@testing-library/jest-dom"
     */
    expect(screen.getByText("To Do")).toBeVisible();
  });
});
