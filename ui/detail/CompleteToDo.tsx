import { StyledCard } from "@ui/todo/Card";
import { useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import FlexBox from "@ui/flex/FlexBox";
import Button from "@ui/button";
import PlainText from "@ui/typography/PlainText";
import ErrorText from "@ui/typography/ErrorText";
import { PlusSvgIcon } from "@ui/svg";
import useToDo from "@hooks/useToDo";
import { ICompleteToDoProps } from "@ui/detail/types";

const CompleteToDo = ({ detailToDoId, toDo }: ICompleteToDoProps) => {
  const { completeDetail } = useToDo();
  const [visible, setVisible] = useState(false);
  const onComplete = () => {
    completeDetail({
      id: toDo.id,
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
