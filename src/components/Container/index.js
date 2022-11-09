import React from "react";

//Externals
import { ListEmployes } from "..";

//Components
import { ModalEmploye } from "../../components";

//Externals
import styled from "styled-components";

const MainContainer = styled.div`
  width: 350px;
  height: 550px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;
`;

const Container = () => {
  return (
    <MainContainer>
      <ListEmployes />
      <ModalEmploye />
    </MainContainer>
  );
};

export default Container;
