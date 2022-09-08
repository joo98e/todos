import { afterEach, beforeEach, describe } from "@jest/globals";
import AddCard from "@ui/todo/AddCard";
import useReduxProvider from "@testing/fixtures/useReduxProvider";
import { getByText } from "@testing-library/dom";
import { act, cleanup, fireEvent, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import useToDo from "@hooks/useToDo";

jest.mock("@hooks/useToDo");
// jest.mock("react-redux");
// jest.mock("react-hook-form");

describe("AddCard Dispatch 호출 확인", function () {
  let root;
  let useToDo;

  beforeEach(() => {
    root = useReduxProvider(<AddCard />, {});
    useToDo.mockImplementationOnce(() => {
      return {
        addToDoList: function () {},
      };
    });

    // 추가하기 버튼을 찾아 클릭
    const button = root.getByText("추가하기");
    fireEvent.click(button);
  });

  afterEach(cleanup);

  it("폼이 입력되지 않은 채 Submit", async () => {
    const { addToDoList } = useToDo();
    addToDoList.mockImplementationOnce(() => {});

    const handleSubmit = jest.fn(() => {
      return null;
    });

    const nicknameInput = screen.getByPlaceholderText("닉네임을 입력하세요.");
    const subjectInput = screen.getByPlaceholderText("제목을 입력하세요.");
    const descInput = screen.getByPlaceholderText("내용을 입력하세요.");
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
  });

  /**
   * dispatch를 jest func 으로 선언, impl로 무언가를 만들어야 할 것이고
   * 그 전에 텍스트를 채운 뒤 텍스트에 값이 있는지 확인하고, 클릭 버튼을 눌렀을 때 dispatch가 실제로 호출됐는지 확인
   * 데이터가 온전히 갔는지는 store에서 확인
   * // const addButton = container.getByText("추가하기");
   */
  it("폼 입력 후 Submit, Dispatch 호출", async function () {
    const useForm = jest.fn();

    // 화면에 노출
    const popUpTitle = screen.getByText("To Do");
    expect(popUpTitle).toBeVisible();

    // nickname input value is "ayaan"
    const nicknameInput: HTMLInputElement = screen.getByPlaceholderText("닉네임을 입력하세요.");
    fireEvent.change(nicknameInput, { target: { value: "ayaan" } });
    expect(nicknameInput).toHaveValue("ayaan");

    const subjectInput: HTMLInputElement = screen.getByPlaceholderText("제목을 입력하세요.");
    fireEvent.change(subjectInput, { target: { value: "gfedcba" } });
    expect(subjectInput).toHaveValue("gfedcba");

    const descInput: HTMLInputElement = screen.getByPlaceholderText("내용을 입력하세요.");
    fireEvent.change(descInput, { target: { value: "abcdefg" } });
    expect(descInput).toHaveValue("abcdefg");

    const submitButton = root.getByText("추가");
    /**
     * React state Action Wrapping
     */
    await act(() => {
      fireEvent.click(submitButton);
    });

    expect(popUpTitle).not.toBeVisible();
  });
});
