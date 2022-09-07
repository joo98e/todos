import styled from "@emotion/styled";

const StyledInput = styled.input`
  padding: 4px;
  border: 1px solid purple;
`;
const Input = ({ register, ...rest }: any) => {
  return <StyledInput {...register} {...rest} />;
};

export default Input;
