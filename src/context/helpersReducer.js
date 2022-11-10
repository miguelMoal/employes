export const deleteEmploye = (id, employes) => {
  const newEmployes = employes.filter((employe) => employe._id !== id);
  return newEmployes;
};
