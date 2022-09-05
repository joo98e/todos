import { RootState } from "@store/index";
import MakeGrid from "@ui/grid/MakeGrid";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-right: 48px;
`;

const Home = () => {
  const toDoList = useSelector((state: RootState) => state.todo);

  return (
    <Wrapper>
      <MakeGrid column={3} gap={24} items={toDoList.todo} />
    </Wrapper>
  );
};

export default Home;
