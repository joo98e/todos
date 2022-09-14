import GridOrg from "@components/organisms/toDoList/GridOrg";
import styled from "@emotion/styled";

import Card from "@components/molecules/toDoList/Card";
import useToDo from "@hooks/useToDo";
import CardHeader from "@components/molecules/toDoList/CardHeader";
import AddToDoCard from "@components/molecules/toDoList/AddToDoCard";
import ListTemplate from "@components/templates/toDoList/ListTemplate";

const Home = () => {
  return (
    <>
      <ListTemplate />
    </>
  );
};

export default Home;
