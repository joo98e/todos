import { StyledCard } from "@ui/todo/Card";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "@ui/button";
import FlexBox from "@ui/flex/FlexBox";
import { PlusSvgIcon } from "@ui/svg";
import { log } from "util";
import { RootState } from "@store/index";
import { IToDo } from "@store/slices/types/ToDo";
import useToDo from "../../src/hooks/useToDo";
import { IAddToDoProps } from "@ui/detail/types";
import Typhography from "../../components/atom/Typography";

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

const StyledGenerateBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  min-height: 200px;
  background: #fdfdfd;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  z-index: 9;
  transform: translate(-50%, -50%);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  color: slategrey;
  padding: 4px;
  border-bottom: 1px solid #333;
`;

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 16px;
  color: slategrey;
  padding: 4px;
  border-bottom: 1px solid #333;
  resize: none;
`;

interface IForm {
  title: string;
  desc: string;
}

const AddToDo = ({ toDo }: IAddToDoProps) => {
  const [visible, setVisible] = useState(false);
  const { addDetailToDo } = useToDo();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    if (!toDo.id || !data || !toDo) {
      return false;
    }

    addDetailToDo({
      id: toDo.id,
      data: {
        ...data,
      },
    });

    handleToggle();
  };

  const handleToggle = () => {
    setVisible((prev) => !prev);
    reset();
  };

  return (
    <>
      <Button onClick={handleToggle}>추가하기</Button>

      {visible && (
        <>
          <StyledBackDrop onClick={handleToggle} />
          <StyledGenerateBox>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typhography fontSize={24} color="#7b68ee">
                To Do List Add
              </Typhography>
              <div>
                <StyledInput
                  {...register("title", {
                    required: "제목을 입력해주세요. ",
                  })}
                  placeholder={"제목을 입력하세요."}
                />
                <StyledTextArea {...register("desc", { required: "내용을 입력해주세요. " })} placeholder={"내용을 입력하세요."} rows={4} />
              </div>
              <Typhography variant={"error"} fontSize={14}>
                {errors.title?.message || errors.desc?.message}
              </Typhography>
              <FlexBox justifyContent={"center"} alignItems={"center"}>
                <Button onClick={handleSubmit(onSubmit)}>추가</Button>
                <Button primary="#999" onClick={handleToggle}>
                  닫기
                </Button>
              </FlexBox>
            </form>
          </StyledGenerateBox>
        </>
      )}
    </>
  );
};

export default AddToDo;
