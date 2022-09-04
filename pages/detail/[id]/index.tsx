import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { useEffect } from "react";
import { IToDo } from "@store/slices/types";
import styled from "@emotion/styled";
import Row from "@ui/todo/Row";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import FlexBox from "@ui/flex/FlexBox";
import Button from "@ui/button";

const StyledToDoDetailBox = styled.div`
  width: 480px;
  margin: 0 auto;
  padding: 36px;
`;

const DetailToDoPage = () => {
  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : undefined;
  const dispatch = useDispatch();

  // TODO 이름 변경하기
  const detailTodo: IToDo = useSelector((state: RootState) => {
    return state.todo.todo.filter((item) => item.id === toDoId)[0];
  });

  const addDetailTodo = () => {};

  return (
    <StyledToDoDetailBox>
      {detailTodo && (
        <>
          <PlainText>{`${detailTodo.nickname}'s To Do` ?? " - "}</PlainText>
          <SubText>{detailTodo.desc ?? " - "}</SubText>
        </>
      )}

      {detailTodo &&
        detailTodo.list?.length &&
        detailTodo.list.map((item) => {
          return <Row {...item} />;
        })}

      <FlexBox>
        <Button onClick={addDetailTodo}>추가</Button>
        <Button primary="#999" onClick={addDetailTodo}>
          삭제
        </Button>
      </FlexBox>
    </StyledToDoDetailBox>
  );
};

export default DetailToDoPage;
