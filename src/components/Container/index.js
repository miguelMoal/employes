import React from "react";

//Externals
import { ListEmployes } from "..";

//Components
import { ModalEmploye } from "../../components";

//Externals
import styled from "styled-components";

//Globals
import { useStore } from "../../context";

const MainContainer = styled.div`
  width: 350px;
  height: 550px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;
`;

const Container = () => {
  const { showModal } = useStore();

  return (
    <MainContainer>
      <ListEmployes />
      {showModal.show && <ModalEmploye />}
    </MainContainer>
  );
};

export default Container;
