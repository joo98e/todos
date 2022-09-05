import styled from "@emotion/styled";
import { IToDoDetail } from "@store/slices/types";
import Button from "@ui/button";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";

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
          <Button onClick={() => {}}>완료하기</Button>
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
