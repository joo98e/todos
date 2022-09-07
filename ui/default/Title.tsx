import getPageTitleByPathname from "@utils/getPageTitleByPathname";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { PrevSvgIcon } from "@ui/svg";

const StyledTitle = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  font-size: 36px;
  text-indent: 56px;
  font-family: "LeferiPoint-WhiteObliqueA", sans-serif;
  padding-left: 12px;
`;

const IconButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border: 0;
  border-radius: 50%;
  transition: background 0.3s;
  cursor: pointer;
  background: none;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Title = () => {
  const router = useRouter();
  const status = /detail/.test(router.pathname);

  return (
    <StyledTitle>
      {status && (
        <IconButton onClick={() => router.back()}>
          <PrevSvgIcon width={"32px"} height={"32px"} />
        </IconButton>
      )}
      {getPageTitleByPathname(router.pathname)}
    </StyledTitle>
  );
};

export default Title;
