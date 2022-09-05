import styled from "@emotion/styled";

const StyledFlexBox = styled.div<{
  justifyContent: "center" | "start" | "end";
  alignItems: "center" | "start" | "end";
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

// React.FC
const FlexBox = ({
  children,
  justifyContent,
  alignItems,
}: {
  children: JSX.Element | JSX.Element[];
  justifyContent: "center" | "start" | "end";
  alignItems: "center" | "start" | "end";
}) => {
  return (
    <StyledFlexBox justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </StyledFlexBox>
  );
};

export default FlexBox;
