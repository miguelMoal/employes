import { useState } from "react";

//Externals
import styled from "styled-components";

//Components
import { CustomInput, CustomButton } from "../../components";

//Globasl
import { useSetModal, useSetLoading, useAddEmploye } from "../../context";

//Connections
import { createEmploye } from "../../conections";

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
  height: 340px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const LabelFile = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.color.textModal};
`;

const TextDanger = styled.p`
  margin: 0px;
  color: tomato;
`;

const ModalEmploye = () => {
  const setModal = useSetModal();
  const setLoading = useSetLoading();
  const addEmploye = useAddEmploye();

  const [textAlert, setTextAlert] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const formData = new FormData();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const createEmployes = () => {
    if (values.name == "" || values.email == "" || values.phone == "") {
      setTextAlert("Todos los campos son requeridos");
      return;
    }
    setLoading(true);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    createEmploye(formData)
      .then((res) => {
        if (res.ok) {
          addEmploye(res.msg);
          setModal(false);
          return;
        }
        setTextAlert(res.msg);
      })
      .finally(() => setLoading(false));
  };

  const cancel = () => {
    setModal(false);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      formData.append("file", file);
    }
  };

  return (
    <ModalContainer>
      <FormContainer>
        {textAlert && <TextDanger>{textAlert}</TextDanger>}
        <FileContainer>
          <LabelFile>Sube una imagen</LabelFile>
          <input type="file" onChange={handleFile} placeholder="sad" />
        </FileContainer>
        <CustomInput
          label="Nombre"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <CustomInput
          label="Correo"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <CustomInput
          label="Teléfono"
          name="phone"
          onChange={handleChange}
          value={values.phone}
        />
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
