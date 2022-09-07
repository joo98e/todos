import styled from "@emotion/styled";

import Button from "@ui/button";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import CompleteToDo from "./CompleteToDo";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo } from "@common/types/ToDo";
import { IRowProps } from "@ui/detail/types";
import { STATUS_TODO } from "../../src/common/enums/STATUS_TODO";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  align-items: center;
`;

const GridItem = styled.div``;

const Row = ({ detail: { id, isCompleted, desc, title } }: IRowProps) => {
  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : null;
  const completed = isCompleted === STATUS_TODO.COMPLETE;
  const toDo: IToDo = useSelector((state: RootState) => {
    return state.toDoState.toDos.filter((item) => item.id === toDoId)[0];
  });

  return (
    <Grid>
      <GridItem>
        {completed ? (
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
        {completed ? (
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
        {!completed ? (
          <CompleteToDo detailToDoId={id} toDo={toDo} />
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
