import { RootState } from "@store/index";
import MakeGrid from "@ui/grid/MakeGrid";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import useToDo from "../src/hooks/useToDo";
import Card from "@ui/todo/Card";
import AddCard from "@ui/todo/AddCard";

const Wrapper = styled.div`
  padding-right: 48px;
`;

const Home = () => {
  const toDoList = useSelector((state: RootState) => state.toDoState.toDos);
  const {} = useToDo();

  return (
    <Wrapper>
      <MakeGrid column={3} gap={24}>
        {toDoList.map((item, idx) => {
          return (
            <Card
              key={idx}
              id={item.id}
              nickname={item.nickname}
              subject={item.subject}
              desc={item.desc}
              list={item.list}
            />
          );
        })}
        <AddCard />
      </MakeGrid>
    </Wrapper>
  );
};

export default Home;
