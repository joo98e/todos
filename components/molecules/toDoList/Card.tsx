import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { IToDo } from "@store/slices/types/ToDo";
import Typhography from "../../atom/Typography";
import CardHeader from "@components/molecules/toDoList/CardHeader";

export interface ICardProps {
  id: number;
  nickname: string;
  subject: string;
  desc: string;
  list: any[];
}

export const DefaultBackDrop = styled.div`
  min-width: 240px;
  min-height: 120px;
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
    router.push(`/detail/${id}`);
  };

  return (
    <DefaultBackDrop onClick={handleClickDetail} {...rest}>
      <CardHeader subject={subject} desc={desc} />
    </DefaultBackDrop>
  );
};

export default Card;
