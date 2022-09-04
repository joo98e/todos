import styled from "@emotion/styled";

const StyledFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// React.FC
const FlexBox = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <StyledFlexBox>{children}</StyledFlexBox>;
};

export default FlexBox;
