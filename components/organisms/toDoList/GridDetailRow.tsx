import styled from "@emotion/styled";
import CompleteButton from "../../molecules/toDoDetail/CompleteButton";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { IToDo } from "@store/slices/types/ToDo";
import { IRowProps } from "@components/organisms/toDoList/types";
import Typhography from "../../atom/Typography";
import Button from "@components/atom/Button";
import { css } from "@emotion/react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  align-items: center;
`;

const GridItem = styled.div<{ isCompleted: boolean }>`
  ${(props) =>
    props.isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;

const GridDetailRow = ({ detail: { id, isCompleted, desc, title } }: IRowProps) => {
  return (
    <Grid>
      <GridItem isCompleted={isCompleted}>
        <Typhography fontSize={18}>{title}</Typhography>
      </GridItem>
      <GridItem isCompleted={isCompleted}>
        <Typhography fontSize={16}>{desc}</Typhography>
      </GridItem>
      <GridItem isCompleted={false}>
        {!isCompleted ? (
          <CompleteButton detailToDoId={id} />
        ) : (
          <Button primary={"#5d5d5d"} textPrimary={"#fff"}>
            완료됨
          </Button>
        )}
      </GridItem>
    </Grid>
  );
};

export default GridDetailRow;
