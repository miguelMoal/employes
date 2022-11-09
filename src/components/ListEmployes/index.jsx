import { useState, useEffect } from "react";

//Externals
import styled from "styled-components";

//Components
import { Employe } from "../../components";

//Connections
import { createEmploye } from "../../conections";

const ListContainer = styled.div`
  display: flex;
`;

const ListEmployes = () => {
  useEffect(() => {
    createEmploye().then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <ListContainer>
      <Employe />
    </ListContainer>
  );
};

export default ListEmployes;
