import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo, IToDoDetail } from "@store/slices/types";
import styled from "@emotion/styled";
import Row from "./Row";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import FlexBox from "@ui/flex/FlexBox";
import Button from "@ui/button";
import { addDetailTodo } from "@store/slices/todoSlice";
import { Divider } from "antd";
import { useEffect, useState } from "react";
import AddToDo from "./AddToDo";
import ErrorText from "@ui/typography/ErrorText";

const StyledToDoDetailBox = styled.div`
  width: 100%;
  padding-right: 8px;
`;

const DetailToDoPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : null;

  const toDo: IToDo = useSelector((state: RootState) => {
    return state.todo.todo.filter((item) => item.id === toDoId)[0];
  });

  return (
    <StyledToDoDetailBox>
      {toDo && (
        <>
          <PlainText fontSize={24}>
            {`${toDo.nickname}'s To Do` ?? " - "}
          </PlainText>
          <SubText fontSize={18}>{toDo.desc ?? " - "}</SubText>
        </>
      )}
      <Divider />

      {toDo &&
        toDo.list?.length !== 0 &&
        toDo.list.map((item, index) => {
          return <Row key={index} detail={item} />;
        })}

      {toDoId && toDo ? (
        <FlexBox justifyContent={"end"} alignItems={"center"}>
          <AddToDo toDo={toDo} toDoId={toDoId} />
        </FlexBox>
      ) : (
        <>
          <ErrorText fontSize={24}>To Do를 찾을 수 없습니다. </ErrorText>
        </>
      )}
    </StyledToDoDetailBox>
  );
};

export default DetailToDoPage;
