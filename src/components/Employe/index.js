//Externals
import styled from "styled-components";

//Components
import { Text } from "..";

//Connections
import { deleteEmploye } from "../../conections/";

//Globasl
import { useDeleteEmploye, useSetModal } from "../../context";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${({ theme }) => `solid 1px ${theme.color.border}`};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 25px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: flex-start;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Employe = ({ data }) => {
  const deleteEmployeList = useDeleteEmploye();
  const setModal = useSetModal();

  const deleteEmp = () => {
    deleteEmploye(data._id).then((result) => {
      if (result.ok) {
        deleteEmployeList(result.msg);
      }
    });
  };

  const updateEmp = () => {
    setModal({
      show: true,
      type: "update",
    });
  };

  return (
    <CardContainer>
      <ButtonsContainer>
        <img
          src="./edit.png"
          width="35px"
          height="35px"
          onClick={updateEmp}
          style={{ cursor: "pointer" }}
        />
        <img
          onClick={deleteEmp}
          src="./remove.png"
          width="32px"
          height="32px"
          style={{ marginLeft: "10px", cursor: "pointer" }}
        />
      </ButtonsContainer>
      <div>
        <div>
          <img
            style={{ height: "70px", width: "70px", borderRadius: "100%" }}
            src={`${process.env.REACT_APP_API_URL}uploads/${data.image}`}
          />
        </div>
        <InfoContainer>
          <Text>Nombre: {data.name}</Text>
          <Text>Telefono: {data.phone}</Text>
          <Text>E-mail: {data.email}</Text>
        </InfoContainer>
      </div>
    </CardContainer>
  );
};

export default Employe;
