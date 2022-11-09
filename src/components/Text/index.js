//Externals
import styled from "styled-components";

const ContainerText = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.color.text};
  font-size: 15px;
`;

const Text = ({ children }) => {
  return <ContainerText>{children}</ContainerText>;
};

export default Text;
