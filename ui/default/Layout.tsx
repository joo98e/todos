import Title from "./Title";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100vw;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
`;
const Children = styled.div``;
const Layout = ({ children }) => {
  return (
    <Wrapper>
      {/* Title */}
      <Title />
      {/* Children */}
      <Children>{children}</Children>
    </Wrapper>
  );
};

export default Layout;
