import { afterEach, beforeEach, describe } from "@jest/globals";
import AddCard from "@ui/todo/AddCard";
import useReduxProvider from "@testing/fixtures/useReduxProvider";
import { getByText } from "@testing-library/dom";
import { act, cleanup, fireEvent, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import useToDo from "@hooks/useToDo";
import { PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoDetail } from "@store/slices/types/ToDo";

describe("[리덕스] AddCard Dispatch 호출 확인", function () {
  let root;

  beforeEach(() => {
    root = useReduxProvider(<AddCard />, {});
    jest.mock("useToDo", () => {});

    // 추가하기 버튼을 찾아 클릭
    const button = root.getByText("추가하기");
    fireEvent.click(button);
  });

  afterEach(cleanup);

  it("폼이 입력되지 않은 채 Submit", async () => {
    const handleSubmit = jest.fn(() => {
      return null;
    });

    const nicknameInput = screen.getByPlaceholderText("닉네임을 입력하세요.");
    const subjectInput = screen.getByPlaceholderText("제목을 입력하세요.");
    const descInput = screen.getByPlaceholderText("내용을 입력하세요.");
    const popUpTitle = screen.getByText("To Do");

    expect(nicknameInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(descInput).toBeInTheDocument();

    expect(nicknameInput).toHaveValue("");
    expect(subjectInput).toHaveValue("");
    expect(descInput).toHaveValue("");

    screen.getByText("추가").onclick = handleSubmit;
    root.baseElement.querySelector("form").onSubmit = handleSubmit;

    await act(() => {
      fireEvent.click(screen.getByText("추가"));
    });

    // form의 각 input에 value가 없을 경우 submit 이벤트가 발생했으나 제출되지 않음(팝업이 종료되지 않음)
    expect(handleSubmit.mock.calls.length).toBe(1);
    expect(popUpTitle).toBeVisible();
  });

  /**
   * dispatch를 jest func 으로 선언, impl로 무언가를 만들어야 할 것이고
   * 그 전에 텍스트를 채운 뒤 텍스트에 값이 있는지 확인하고, 클릭 버튼을 눌렀을 때 dispatch가 실제로 호출됐는지 확인
   * 데이터가 온전히 갔는지는 store에서 확인
   * // const addButton = container.getByText("추가하기");
   */
  it("폼 입력 후 Submit, Dispatch 호출", async function () {
    const handleSubmit = jest.fn(() => {
      return null;
    });

    // 화면에 노출
    const popUpTitle = screen.getByText("To Do");
    const nicknameInput: HTMLInputElement = screen.getByPlaceholderText("닉네임을 입력하세요.");
    const subjectInput: HTMLInputElement = screen.getByPlaceholderText("제목을 입력하세요.");
    const descInput: HTMLInputElement = screen.getByPlaceholderText("내용을 입력하세요.");
    const submitButton = root.getByText("추가");
    submitButton.onclick = handleSubmit;
    root.baseElement.querySelector("form").onSubmit = handleSubmit;

    expect(popUpTitle).toBeVisible();

    fireEvent.change(nicknameInput, { target: { value: "ayaan" } });
    fireEvent.change(subjectInput, { target: { value: "gfedcba" } });
    fireEvent.change(descInput, { target: { value: "abcdefg" } });

    expect(nicknameInput).toHaveValue("ayaan");
    expect(subjectInput).toHaveValue("gfedcba");
    expect(descInput).toHaveValue("abcdefg");

    /**
     * React state Action Wrapping
     */
    await act(() => {
      fireEvent.click(submitButton);
    });

    // form의 각 input에 value가 있고, submit 이벤트가 발생하여 제출함(팝업이 종료되어 더 이상 보이지 않음)
    expect(handleSubmit.mock.calls.length).toBe(1);
    expect(popUpTitle).not.toBeVisible();
  });
});
