import styled from "@emotion/styled";

import Button from "@ui/button";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import CompleteToDo from "./CompleteToDo";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo, IToDoDetail } from "@common/types/ToDo";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  align-items: center;
`;

const GridItem = styled.div``;

interface IRow {
  detail: IToDoDetail;
}

const Row = ({ detail: { id, isCompleted, desc, title } }: IRow) => {
  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : null;
  const toDo: IToDo = useSelector((state: RootState) => {
    return state.toDoState.toDos.filter((item) => item.id === toDoId)[0];
  });

  return (
    <Grid>
      <GridItem>
        {isCompleted ? (
          <PlainText
            style={{ textDecoration: "line-through", color: "#777" }}
            fontSize={18}
          >
            {title}
          </PlainText>
        ) : (
          <PlainText fontSize={18}>{title}</PlainText>
        )}
      </GridItem>
      <GridItem>
        {isCompleted ? (
          <SubText
            fontSize={16}
            style={{ textDecoration: "line-through", color: "#777" }}
          >
            {desc}
          </SubText>
        ) : (
          <SubText fontSize={16}>{desc}</SubText>
        )}
      </GridItem>
      <GridItem>
        {!isCompleted ? (
          <CompleteToDo detailToDoId={id} toDoId={toDoId ?? 0} toDo={toDo} />
        ) : (
          <Button primary={"#5d5d5d"} textPrimary={"#fff"} onClick={() => {}}>
            완료됨
          </Button>
        )}
      </GridItem>
    </Grid>
  );
};

export default Row;
