//Externals
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ color }) => color};
  margin-left: ${({ ml }) => ml};
`;

const CustomButton = ({ text, color, ml, action }) => {
  const handleAction = () => {
    action && action();
  };

  return (
    <Button color={color} ml={ml} onClick={() => handleAction()}>
      {text}
    </Button>
  );
};

export default CustomButton;
