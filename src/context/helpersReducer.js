export const deleteEmploye = (id, employes) => {
  const newEmployes = employes.filter((employe) => employe._id !== id);
  return newEmployes;
};

export const updateEmploye = (data, employes) => {
  const newEmployes = employes.map((item) => {
    if (item._id == data.id) {
      return { ...item, name: data.name, email: data.email, phone: data.phone };
    }
    return item;
  });
  return newEmployes;
};
