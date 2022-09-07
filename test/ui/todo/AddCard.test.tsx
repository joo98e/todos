import { beforeEach } from "@jest/globals";
import useTestContainer from "@testing/fixtures/useTestContainer";
import AddCard from "@ui/todo/AddCard";
import useReduxProvider from "@testing/fixtures/useReduxProvider";
import { configureStore } from "@reduxjs/toolkit";
import toDoState from "@store/slices/toDoSlice";
import { fireEvent, getByText } from "@testing-library/dom";

jest.mock("toDoSlice");

describe("UI 컴포넌트 - Add Card", function () {
  let container;

  beforeEach(() => {
    container = useReduxProvider(<AddCard />, { preloadedState: {} });
  });

  it("Card 등록", function () {
    fireEvent(
      getByText(container, "추가"),
      new MouseEvent("click", {
        bubbles: false,
      })
    );
  });
});
