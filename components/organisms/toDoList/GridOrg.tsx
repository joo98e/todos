import styled from "@emotion/styled";
interface IGridOrgProps {
  column: number;
  gap?: number;
  fr?: string;
  children: any;
}

const Grid = styled.div<{
  gap: number;
  column: number;
  fr?: string;
}>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.column}, ${props.fr})`};
  grid-gap: ${(props) => `${props.gap}px`};
`;

const GridOrg = ({ column, fr = "1fr", gap = 8, children, ...rest }: IGridOrgProps) => {
  return (
    <Grid column={column} gap={gap} fr={fr} {...rest}>
      {children}
    </Grid>
  );
};

export default GridOrg;
