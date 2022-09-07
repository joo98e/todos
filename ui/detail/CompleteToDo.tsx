import { StyledCard } from "@ui/todo/Card";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDoDetail,
  addToDoList,
  completedDetailToDo,
} from "@store/slices/toDoSlice";
import ErrorText from "@ui/typography/ErrorText";
import Button from "@ui/button";
import PlainText from "@ui/typography/PlainText";
import FlexBox from "@ui/flex/FlexBox";
import { PlusSvgIcon } from "@ui/svg";
import { log } from "util";
import { RootState } from "@store/index";

import { IToDo } from "@common/types/ToDo";
import useToDo from "@hooks/useToDo";

const CompleteToDo = ({
  detailToDoId,
  toDoId,
  toDo,
}: {
  detailToDoId: number;
  toDoId: number;
  toDo: IToDo;
}) => {
  const { allToDos, completeDetail } = useToDo();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onComplete = () => {
    completeDetail({
      id: toDoId,
      detailToDoId,
    });
  };

  return (
    <>
      <Button onClick={onComplete}>완료하기</Button>
    </>
  );
};

export default CompleteToDo;
