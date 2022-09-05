import { useState } from "react";
import { useSelector } from "react-redux";
import SubText from "@ui/typography/SubText";
import { RootState } from "@store/index";

const useAllToDo = () => {
  const [exsits, setExsits] = useState<boolean>(false);
  const [allToDo, setAllToDo] = useState([]);
  const { todos } = useSelector((state: RootState) => state.toDoState);

  return [exsits, todos];
};

export default useAllToDo;
