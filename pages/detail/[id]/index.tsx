import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo, IToDoDetail } from "@store/slices/types";
import styled from "@emotion/styled";
import Row from "@ui/todo/Row";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import FlexBox from "@ui/flex/FlexBox";
import Button from "@ui/button";
import { addDetailTodo } from "@store/slices/todoSlice";
import { Progress } from "antd";
import { useEffect, useState } from "react";
import AddToDo from "./AddToDo";

const StyledToDoDetailBox = styled.div`
  width: 100%;
  padding-right: 8px;
`;

const DetailToDoPage = () => {
  const [percentage, setPercentage] = useState(0);
  const dispatch = useDispatch();

  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : null;
  const detailTodo: IToDo = useSelector((state: RootState) => {
    return state.todo.todo.filter((item) => item.id === toDoId)[0];
  });

  useEffect(() => {
    if (detailTodo && detailTodo.list) {
      const total = detailTodo.list?.length;
      const current = detailTodo.list?.filter(
        (value, index) => value.isCompleted
      ).length;
      setPercentage(() => (current / total) * 100);
    }
    console.log(percentage);
  }, [detailTodo]);

  const addToDo = () => {
    const detail: IToDoDetail = {
      id: new Date().getTime(),
      title: "타이틀",
      desc: "desc",
      isCompleted: false,
    };

    dispatch(addDetailTodo({ toDoId: detailTodo.id, detailToDo: detail }));
  };

  return (
    <StyledToDoDetailBox>
      {detailTodo && (
        <>
          {/*{percentage && (*/}
          {/*  <Progress type={"circle"} percent={percentage}></Progress>*/}
          {/*)}*/}

          <PlainText fontSize={24}>
            {`${detailTodo.nickname}'s To Do` ?? " - "}
          </PlainText>
          <SubText fontSize={18}>{detailTodo.desc ?? " - "}</SubText>
        </>
      )}

      {detailTodo &&
        detailTodo.list?.length !== 0 &&
        detailTodo.list.map((item, index) => {
          return <Row key={index} detail={item} />;
        })}

      {toDoId && <AddToDo toDoId={toDoId} />}

      <FlexBox justifyContent={"end"} alignItems={"center"}>
        <Button onClick={addToDo}>추가</Button>
        <Button primary="#999" onClick={addToDo}>
          삭제
        </Button>
      </FlexBox>
    </StyledToDoDetailBox>
  );
};

export default DetailToDoPage;
