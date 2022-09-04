import styled from "@emotion/styled";
import { IToDo } from "@store/slices/types";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import { useRouter } from "next/router";

export const StyledCard = styled.div<{
  isIconCard?: boolean;
}>`
  ${(props) =>
    props.isIconCard &&
    `
    display : flex;
    justify-content : center;
    align-items : center;
  `}
  min-width: 240px;
  height: 180px;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  background: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
`;

const Card = ({ id, subject, desc }: IToDo) => {
  const router = useRouter();

  const handleClickDetail = () => {
    router.push(`/detail/${id}`);
  };
  return (
    <StyledCard onClick={handleClickDetail}>
      <PlainText oneline={true}>{subject ?? "제목 없음"}</PlainText>
      <SubText>{desc ?? " - "}</SubText>
    </StyledCard>
  );
};

export default Card;
