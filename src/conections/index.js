//Services
import Service from "../services/api";

const _fetch = Service();

export const createEmploye = async (file) => {
  try {
    const resp = await fetch("http://localhost:8080/api/employes/", {
      method: "POST",
      body: file,
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};
