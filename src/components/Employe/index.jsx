//Externals
import styled from "styled-components";

//Components
import { Text } from "../../components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${({ theme }) => `solid 1px ${theme.color.border}`};
  border-radius: 10px;
  width: 100%;
  padding: 10px;
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

const Employe = () => {
  return (
    <CardContainer>
      <ButtonsContainer>
        <img src="./edit.png" width="35px" height="35px" />
        <img
          src="./remove.png"
          width="32px"
          height="32px"
          style={{ marginLeft: "10px" }}
        />
      </ButtonsContainer>
      <div>
        <div>
          <img
            style={{ height: "70px", width: "70px", borderRadius: "100%" }}
            src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          />
        </div>
        <InfoContainer>
          <Text>Nombre: </Text>
          <Text>Telefono:</Text>
          <Text>E-mail:</Text>
        </InfoContainer>
      </div>
    </CardContainer>
  );
};

export default Employe;
