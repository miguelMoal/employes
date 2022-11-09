import { useState } from "react";

//Externals
import styled from "styled-components";

//Components
import { CustomInput, CustomButton } from "../../components";

//Globasl
import { useSetModal } from "../../context";

//Connections
import { createEmploye, fileUpload } from "../../conections";

const ModalContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.color.modal};
  color: ${({ theme }) => theme.color.textModal};
  width: 80%;
  height: 260px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ModalEmploye = () => {
  const setModal = useSetModal();

  const [values, setValues] = useState({
    name: "a",
    email: "a",
    phone: "s",
  });
  const [file, setFile] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const createEmployes = () => {
    createEmploye(values.name, values.email, values.phone, file)
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancel = () => {
    setModal(false);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", "name");
      formData.append("email", "email");
      formData.append("phone", "´hone");
      fileUpload(formData).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <ModalContainer>
      <FormContainer>
        <input type="file" onChange={handleFile} />
        <CustomInput
          label="Nombre"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <CustomInput label="Correo" name="email" onChange={handleChange} />
        <CustomInput label="Teléfono" name="phone" onChange={handleChange} />
        <ButtonsContainer>
          <CustomButton
            text="Cancelar"
            color="tomato"
            action={() => cancel()}
          />
          <CustomButton
            text="Crear"
            color="#009DF8"
            ml={"10px"}
            action={() => createEmployes()}
          />
        </ButtonsContainer>
      </FormContainer>
    </ModalContainer>
  );
};

export default ModalEmploye;
