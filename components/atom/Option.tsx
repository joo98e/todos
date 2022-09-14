interface IOptionProps {
  label: string;
  value: any;
}

const Option = ({ label, value }: IOptionProps) => {
  return <option label={label} value={value} />;
};

export default Option;
