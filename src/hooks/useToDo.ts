/**
 *
 */
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo } from "@common/types/ToDo";

const useToDo = () => {
  const todos: IToDo[] = useSelector(
    (state: RootState) => state.toDoState.toDos
  );

  return {};
};

export default useToDo;
