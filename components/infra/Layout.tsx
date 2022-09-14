import ItalyParagraph from "@components/atom/ItalyParagraph";
import styled from "@emotion/styled";
import usePathName from "@hooks/usePathName";

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
  const { current, pathname } = usePathName();
  return (
    <Wrapper>
      {current}
      <ItalyParagraph />
      {/* Children */}
      <Children>{children}</Children>
    </Wrapper>
  );
};

export default Layout;
