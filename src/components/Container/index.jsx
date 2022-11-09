import React from "react";

//Externals
import { ListEmployes } from "../../components";

//Externals
import styled from "styled-components";

const MainContainer = styled.div`
  width: 350px;
  height: 550px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.primary};
`;

const Container = () => {
  return (
    <MainContainer>
      <ListEmployes />
    </MainContainer>
  );
};

export default Container;
