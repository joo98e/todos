import MakeGrid from "@ui/grid/MakeGrid";
import styled from "@emotion/styled";

import Card from "@ui/todo/Card";
import AddCard from "@ui/todo/AddCard";
import useToDo from "@hooks/useToDo";

const Wrapper = styled.div`
  padding-right: 48px;
`;

const Home = () => {
  const { allToDos } = useToDo();

  return (
    <Wrapper>
      <MakeGrid column={3} gap={24}>
        {allToDos.map((item, idx) => {
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
