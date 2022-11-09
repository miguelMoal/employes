//Externals
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const Input = styled.input`
  display: flex;
  height: 30px;
  width: 95%;
  background-color: ${({ theme }) => theme.color.modal};
  color: ${({ theme }) => theme.color.textModal};
  border-radius: 10px;
  padding-left: 5px;
`;

const Label = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.color.textModal};
`;
const CustomInput = ({ label, value, name, onChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default CustomInput;
