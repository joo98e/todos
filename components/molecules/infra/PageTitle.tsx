import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { PrevIcon } from "@components/atom/svg/Prev";
import Typhography from "@components/atom/Typography";
import usePathName from "@hooks/usePathName";

const StyledTitle = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  display: block;
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

const PageTitle = () => {
  const router = useRouter();
  const { pathname, current } = usePathName();

  return (
    <StyledTitle>
      {current === "Detail Page" && (
        <IconButton onClick={() => router.back()}>
          <PrevIcon width={"32px"} height={"32px"} />
        </IconButton>
      )}
      <Typhography fontSize={36} italy={true} style={{ textIndent: "64px" }}>
        {current}
      </Typhography>
    </StyledTitle>
  );
};

export default PageTitle;
