import { DefaultBackDrop } from "@components/molecules/toDoList/Card";
import { useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import FlexBox from "@components/atom/FlexBox";
import Button from "@components/atom/Button";
import useToDo from "@hooks/useToDo";
import { ICompleteToDoProps } from "@components/organisms/toDoList/types";
import { useRouter } from "next/router";

const CompleteButton = ({ detailToDoId }: ICompleteToDoProps) => {
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

export default CompleteButton;
