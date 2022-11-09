//Services
import Service from "../services/api";

const _fetch = Service();

export const createEmploye = async () => {
  const response = await _fetch.post("employes", {
    name: "juan",
    email: "juan",
    phone: "juan",
  });
  return response;
};
