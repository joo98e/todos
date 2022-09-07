import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";

import styled from "@emotion/styled";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import Row from "@ui/detail/Row";
import AddToDo from "@ui/detail/AddToDo";
import FlexBox from "@ui/flex/FlexBox";
import ErrorText from "@ui/typography/ErrorText";
import { Divider } from "antd";
import { IToDo } from "@common/types/ToDo";
import Button from "@ui/button";

const StyledToDoDetailBox = styled.div`
  width: 100%;
  padding-right: 2rem;
`;

const DetailToDoPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : null;

  const toDo: IToDo = useSelector((state: RootState) => {
    return state.toDoState.toDos.filter((item) => item.id === toDoId)[0];
  });

  return (
    <StyledToDoDetailBox>
      {toDo && (
        <FlexBox justifyContent={"space-between"} alignItems={"center"}>
          <div>
            <PlainText fontSize={24}>
              {`${toDo.nickname}'s To Do` ?? " - "}
            </PlainText>
            <PlainText fontSize={18}>{toDo.subject ?? " - "}</PlainText>
            <SubText fontSize={18}>{toDo.desc ?? " - "}</SubText>
          </div>
          <AddToDo toDo={toDo} toDoId={toDoId} />
        </FlexBox>
      )}
      <Divider />

      {toDo &&
        toDo.list?.length !== 0 &&
        toDo.list.map((item, index) => {
          return <Row key={index} detail={item} />;
        })}

      {!toDoId && !toDo && (
        <ErrorText fontSize={24}>To Do를 찾을 수 없습니다. </ErrorText>
      )}
    </StyledToDoDetailBox>
  );
};

export default DetailToDoPage;
