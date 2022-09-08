import styled from "@emotion/styled";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import { useRouter } from "next/router";
import { IToDo } from "@store/slices/types/ToDo";
import { ICardProps } from "@ui/todo/types";

export const StyledCard = styled.div`
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

const Card = ({ id, subject, desc, list = [], ...rest }: ICardProps) => {
  const router = useRouter();

  const handleClickDetail = () => {
    router.push(`/detail/${id}`).then((r) => {});
  };

  return (
    <StyledCard onClick={handleClickDetail} {...rest}>
      <PlainText oneLine={true}>{subject ?? "제목 없음"}</PlainText>
      <SubText>{desc ?? " - "}</SubText>
    </StyledCard>
  );
};

export default Card;
