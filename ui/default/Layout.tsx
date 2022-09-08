import Title from "./Title";
import styled from "@emotion/styled";
import useMediaQuery from "@hooks/useMediaQuery";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100vw;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
  }
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
