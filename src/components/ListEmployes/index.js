import { useState, useEffect } from "react";

//Externals
import styled from "styled-components";

//Components
import { Employe, Loader, BtnAddEmploye } from "..";

//Connections
import { getEmployes } from "../../conections";

//Globasl
import { useStore, useSetLoading, useSetEmployes } from "../../context";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`;

const ListEmployes = () => {
  const setLoading = useSetLoading();
  const setEmployes = useSetEmployes();
  const { loading, employes } = useStore();

  useEffect(() => {
    setLoading(true);
    getEmployes()
      .then((result) => {
        setEmployes(result.msg);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ListContainer className="scroll">
      {loading && <Loader />}
      {employes.map((employe) => (
        <Employe key={employe._id} data={employe} />
      ))}
      <BtnAddEmploye />
    </ListContainer>
  );
};

export default ListEmployes;
