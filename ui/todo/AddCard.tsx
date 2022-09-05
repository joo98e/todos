import { PlusSvgIcon } from "@ui/svg";
import { StyledCard } from "@ui/todo/Card";
import { useState } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToDoList } from "@store/slices/toDoSlice";
import ErrorText from "@ui/typography/ErrorText";
import Button from "@ui/button";
import PlainText from "@ui/typography/PlainText";
import FlexBox from "@ui/flex/FlexBox";

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
  id: number | Date;
  nickname: string;
  subject: string;
  desc: string;
}

const AddCard = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    dispatch(
      addToDoList({
        ...data,
        id: new Date().getTime(),
        list: [],
      })
    );
    handleToggle();
  };

  const handleToggle = () => {
    setVisible((prev) => !prev);
    reset();
  };

  return (
    <>
      <StyledCard isIconCard={true} onClick={handleToggle}>
        <PlusSvgIcon />
      </StyledCard>

      {visible && (
        <>
          <StyledBackDrop onClick={handleToggle} />
          <StyledGenerateBox>
            <form onSubmit={handleSubmit(onSubmit)}>
              <PlainText fontSize={24} color="#7b68ee">
                To Do
              </PlainText>
              <div>
                <StyledInput
                  {...register("nickname", {
                    required: "닉네임을 입력해주세요. ",
                  })}
                  placeholder={"닉네임을 입력하세요."}
                />
                <StyledInput
                  {...register("subject", {
                    required: "제목을 입력해주세요. ",
                  })}
                  placeholder={"제목을 입력하세요."}
                />
                <StyledTextArea
                  {...register("desc", { required: "내용을 입력해주세요. " })}
                  placeholder={"내용을 입력하세요."}
                  rows={4}
                />
              </div>
              <ErrorText fontSize={14}>
                <>
                  {errors.nickname?.message ||
                    errors.subject?.message ||
                    errors.desc?.message}
                </>
              </ErrorText>
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

export default AddCard;
