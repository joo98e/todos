import { StyledCard } from "@ui/todo/Card";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetailToDo,
  addToDoList,
  completedDetailToDo,
} from "@store/slices/toDoSlice";
import ErrorText from "@ui/typography/ErrorText";
import Button from "@ui/button";
import PlainText from "@ui/typography/PlainText";
import FlexBox from "@ui/flex/FlexBox";
import { PlusSvgIcon } from "@ui/svg";
import { log } from "util";
import { IToDo, IToDoDetail } from "@store/slices/types";
import { RootState } from "@store/index";

const AddToDo = ({
  detailToDoId,
  toDoId,
  toDo,
}: {
  detailToDoId: number;
  toDoId: number;
  toDo: IToDo;
}) => {
  const [visible, setVisible] = useState(false);
  // TODO 이름 바꾸기 (todo.todo)
  const allToDos = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  const onComplete = () => {
    let a = [...allToDos.filter((item) => item.id !== toDoId)];
    let b: IToDo = JSON.parse(
      JSON.stringify(allToDos.filter((item) => item.id === toDoId)[0])
    );

    b.list.forEach((item, idx) => {
      if (item.id === detailToDoId) {
        b.list[idx].isCompleted = true;
      }
    });

    dispatch(
      completedDetailToDo({
        nextToDoState: a.concat(b),
      })
    );
  };

  return (
    <>
      <Button onClick={onComplete}>완료하기</Button>
    </>
  );
};

export default AddToDo;
