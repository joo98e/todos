import { STATUS_TODO } from "@pages/detail/[id]";
import Option from "@ui/select/Option";
import styled from "@emotion/styled";

const StyledSelectBox = styled.select`
  min-width: 8rem;
  padding: 0.5rem;
`;

interface StyledSelectProps {
  value: any;
  defaultValue: any;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactElement | React.ReactElement[];
}

const StyledSelect = ({
  value,
  onChange,
  children,
  defaultValue = null,
  ...rest
}: StyledSelectProps) => {
  return (
    <StyledSelectBox defaultValue={defaultValue} onChange={onChange} {...rest}>
      {children}
    </StyledSelectBox>
  );
};

export default StyledSelect;
