import { StyledCard } from "@ui/todo/Card";
import { useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import FlexBox from "@ui/flex/FlexBox";
import Button from "@ui/button";
import { PlusSvgIcon } from "@ui/svg";
import useToDo from "@hooks/useToDo";
import { ICompleteToDoProps } from "@ui/detail/types";
import { useRouter } from "next/router";

const CompleteToDo = ({ detailToDoId }: ICompleteToDoProps) => {
  const router = useRouter();
  const { completeDetail } = useToDo();
  const [visible, setVisible] = useState(false);
  const toDoId = router.query.id ? +router.query.id : null;
  const onComplete = () => {
    completeDetail({
      id: toDoId,
      detailToDoId,
    });
  };

  return (
    <>
      <Button onClick={onComplete}>완료하기</Button>
    </>
  );
};

export default CompleteToDo;
