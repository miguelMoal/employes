//Globals
import { useSetModal } from "../../context";

//Externals
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  background-color: #4a88da;
  align-items: center;
  border-radius: 200%;
  cursor: pointer;
`;

const Plus = styled.p`
  margin: 0px;
  font-size: 30px;
  font-weight: 500;
`;

const BtnAddEmploye = () => {
  const setModal = useSetModal();

  return (
    <Container onClick={() => setModal({ show: true, type: "add" })}>
      <Plus>+</Plus>
    </Container>
  );
};

export default BtnAddEmploye;
