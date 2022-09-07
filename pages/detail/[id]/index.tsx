import { useRouter } from "next/router";
import styled from "@emotion/styled";
import PlainText from "@ui/typography/PlainText";
import SubText from "@ui/typography/SubText";
import Row from "@ui/detail/Row";
import AddToDo from "@ui/detail/AddToDo";
import FlexBox from "@ui/flex/FlexBox";
import ErrorText from "@ui/typography/ErrorText";
import { Divider } from "antd";
import useToDo from "@hooks/useToDo";
import StyledSelect from "@ui/select/StyledSelect";
import { useEffect, useState } from "react";
import Option from "@ui/select/Option";
import { IToDoDetail } from "@common/types/ToDo";
import { STATUS_TODO } from "../../../src/common/enums/STATUS_TODO";

const StyledToDoDetailBox = styled.div`
  width: 100%;
  padding-right: 2rem;
`;

const DetailToDoPage = () => {
  const [category, setCategory] = useState<STATUS_TODO>(STATUS_TODO.INCOMPLETE);
  const [imitation, setImitation] = useState<IToDoDetail[]>([]);
  const router = useRouter();
  const toDoId = router.query.id ? +router.query.id : null;
  const { getOneToDo } = useToDo();
  const toDo = getOneToDo(toDoId);

  const handleClickSetCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (!toDo || !toDo.list?.length) return;

    const filtering = category === STATUS_TODO.ALL;
    if (!filtering) {
      setImitation((prev) => {
        return toDo.list?.filter((item) => {
          return item.isCompleted === category;
        });
      });
    } else {
      setImitation(toDo.list);
    }
  }, [toDo, category]);

  return (
    <StyledToDoDetailBox>
      {toDo && (
        <FlexBox justifyContent={"space-between"} alignItems={"center"}>
          <div>
            <PlainText fontSize={24}>
              {`${toDo.nickname}'s To Do` ?? " - "}
            </PlainText>
            <PlainText fontSize={18}>{toDo.subject ?? " - "}</PlainText>
            <SubText fontSize={18}>{toDo.desc ?? " - "}</SubText>
          </div>
          <div>
            <AddToDo toDo={toDo} />
            <StyledSelect
              value={category}
              defaultValue={STATUS_TODO.INCOMPLETE}
              onChange={handleClickSetCategory}
            >
              {[
                STATUS_TODO.ALL,
                STATUS_TODO.COMPLETE,
                STATUS_TODO.INCOMPLETE,
              ].map((item, index) => {
                return <Option key={item} label={item} value={item} />;
              })}
            </StyledSelect>
          </div>
        </FlexBox>
      )}
      <Divider />

      {imitation &&
        imitation.length !== 0 &&
        imitation.map((item, index) => {
          return <Row key={index} detail={item} />;
        })}

      {!toDoId && !toDo && (
        <ErrorText fontSize={24}>To Do를 찾을 수 없습니다. </ErrorText>
      )}
    </StyledToDoDetailBox>
  );
};

export default DetailToDoPage;
