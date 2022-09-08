import AddCard from "@ui/todo/AddCard";
import { IMakeGridProps } from "./types";
import styled, { CreateStyled } from "@emotion/styled";
import Card from "@ui/todo/Card";

const Grid = styled.div<{
  gap: number;
  column: number;
  fr?: string;
}>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.column}, ${props.fr})`};
  grid-gap: ${(props) => `${props.gap}px`};
`;

const MakeGrid = ({
  column,
  fr = "1fr",
  gap = 8,
  children,
  ...rest
}: IMakeGridProps) => {
  return (
    <Grid column={column} gap={gap} fr={fr} {...rest}>
      {children}
    </Grid>
  );
};

export default MakeGrid;
