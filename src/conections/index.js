//Services
import Service from "../services/api";

const _fetch = Service();

export const getEmployes = async () => {
  const response = await _fetch.get("employes");
  return response;
};

export const deleteEmploye = async (id) => {
  const response = await _fetch.delete(`employes/?id=${id}`);
  return response;
};

export const createEmploye = async (file) => {
  try {
    const resp = await fetch(process.env.REACT_APP_API_URL + "api/employes/", {
      method: "POST",
      body: file,
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};
