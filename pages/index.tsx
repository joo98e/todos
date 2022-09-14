import GridOrg from "@components/organisms/toDoList/GridOrg";
import styled from "@emotion/styled";

import Card from "@components/molecules/toDoList/Card";
import useToDo from "@hooks/useToDo";
import CardHeader from "@components/molecules/toDoList/CardHeader";
import AddToDoCard from "@components/molecules/toDoList/AddToDoCard";

const Wrapper = styled.div`
  padding-right: 48px;
`;

const Home = () => {
  const { getAllToDos } = useToDo();

  return (
    <Wrapper>
      <GridOrg column={3} gap={24}>
        {getAllToDos.map((item) => {
          return <Card key={item.id} id={item.id} nickname={item.nickname} subject={item.subject} desc={item.desc} list={item.list} />;
        })}
        <AddToDoCard />
      </GridOrg>
    </Wrapper>
  );
};

export default Home;
