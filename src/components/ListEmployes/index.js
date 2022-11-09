import { useState, useEffect } from "react";

//Externals
import styled from "styled-components";

//Components
import { Employe } from "..";

const ListContainer = styled.div`
  display: flex;
`;

const ListEmployes = () => {
  return (
    <ListContainer>
      <Employe />
    </ListContainer>
  );
};

export default ListEmployes;
