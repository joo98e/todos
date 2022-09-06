/**
 *
 */
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

const useTodo = () => {
  const todos = useSelector((state: RootState) => state.toDoState.todos);


  console.log(todos);
  return {};
};

export default useTodo;
