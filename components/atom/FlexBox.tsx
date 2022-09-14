import styled from "@emotion/styled";

interface StyledFlexBoxProps {
  justifyContent: "center" | "start" | "end" | "space-around" | "space-between";
  alignItems: "center" | "start" | "end";
}

const StyledFlexBox = styled.div<StyledFlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

interface IFlexBoxProps extends StyledFlexBoxProps {
  children: JSX.Element | JSX.Element[];
}

const FlexBox = ({ children, justifyContent, alignItems }: IFlexBoxProps) => {
  return (
    <StyledFlexBox justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </StyledFlexBox>
  );
};

export default FlexBox;
