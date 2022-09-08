import { beforeEach } from "@jest/globals";
import useTestContainer from "@testing/fixtures/useTestContainer";
import AddCard from "@ui/todo/AddCard";
import useReduxProvider from "@testing/fixtures/useReduxProvider";
import { configureStore } from "@reduxjs/toolkit";
import toDoState from "@store/slices/toDoSlice";
import { fireEvent, getByText } from "@testing-library/dom";
import {render} from "@testing-library/react";

jest.mock("toDoSlice");

describe("UI 컴포넌트 - Add Card", function () {
  let container;

  // beforeEach(() => {
  //   container = useReduxProvider(<AddCard />, {});
  // });

  it("Card 등록", function () {
    // fireEvent(
    //   getByText(container, "추가하기"),
    //   new MouseEvent("click", {
    //     bubbles: false,
    //   })
    // );
    const render1 = useReduxProvider(<AddCard />, {});
    const addButton = render1.getByText("추가하기");
    fireEvent.click(addButton)

    expect(render1.getByText("To Do")).toBeTruthy();

  });
});
