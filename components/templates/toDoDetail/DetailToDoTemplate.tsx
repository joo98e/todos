import { useRouter } from "next/router";
import styled from "@emotion/styled";
import GridDetailRow from "@components/organisms/toDoList/GridDetailRow";
import AddTaskButton from "@components/molecules/toDoDetail/AddTaskButton";
import FlexBox from "@components/atom/FlexBox";
import { Divider } from "antd";
import useToDo from "@hooks/useToDo";
import StyledSelect from "@components/atom/StyledSelect";
import { useEffect, useState } from "react";
import Option from "@components/atom/Option";
import { IToDoDetail } from "@store/slices/types/ToDo";
import FILTER_BY_TODO_STATUS from "@store/slices/enums/FILTER_BY_TODO_STATUS";
import Typhography from "@components/atom/Typography";

const StyledToDoDetailBox = styled.div`
  width: 100%;
  padding-right: 2rem;
`;

const selectConfig = [
  {
    desc: FILTER_BY_TODO_STATUS.ALL.desc,
    value: FILTER_BY_TODO_STATUS.ALL.type,
  },
  {
    desc: FILTER_BY_TODO_STATUS.COMPLETED.desc,
    value: FILTER_BY_TODO_STATUS.COMPLETED.type,
  },
  {
    desc: FILTER_BY_TODO_STATUS.INCOMPLETE.desc,
    value: FILTER_BY_TODO_STATUS.INCOMPLETE.type,
  },
];

const DetailToDoTemplate = () => {
  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : null;
  const [category, setCategory] = useState<string>(FILTER_BY_TODO_STATUS.ALL.type);
  const [imitation, setImitation] = useState<IToDoDetail[]>([]);

  const { getOneToDo } = useToDo();
  const toDo = getOneToDo(toDoId);

  const handleClickSetCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (!toDo || !toDo.list?.length) return;
    const criteria = category === FILTER_BY_TODO_STATUS.COMPLETED.type;
    console.log(category, FILTER_BY_TODO_STATUS.COMPLETED.type, imitation);
    category === "ALL"
      ? setImitation(toDo.list)
      : setImitation((prev) => {
          return toDo.list?.filter((item) => {
            return item.isCompleted === criteria;
          });
        });
  }, [toDo, category]);

  return (
    <StyledToDoDetailBox>
      {toDo && (
        <FlexBox justifyContent={"space-between"} alignItems={"center"}>
          <div>
            <Typhography variant={"plain"} fontSize={24}>
              {`${toDo.nickname}'s To Do` ?? " - "}
            </Typhography>
            <Typhography variant={"sub"} fontSize={18}>
              {toDo.subject ?? " - "}
            </Typhography>
            <Typhography variant={"sub"} fontSize={18}>
              {toDo.desc ?? " - "}
            </Typhography>
          </div>
          <div>
            <AddTaskButton toDo={toDo} />
            <StyledSelect value={category} defaultValue={FILTER_BY_TODO_STATUS.ALL.type} onChange={handleClickSetCategory}>
              {selectConfig.map((item, index) => {
                return <Option key={item.value} label={item.desc} value={item.value} />;
              })}
            </StyledSelect>
          </div>
        </FlexBox>
      )}
      <Divider />

      {imitation &&
        imitation.length !== 0 &&
        imitation.map((detail) => {
          return <GridDetailRow key={detail.id} detail={detail} />;
        })}

      {!toDoId && !toDo && <Typhography fontSize={24}>To Do를 찾을 수 없습니다. </Typhography>}
    </StyledToDoDetailBox>
  );
};

export default DetailToDoTemplate;
