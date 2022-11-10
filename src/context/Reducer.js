import { SET_MODAL, SET_LOADING, SET_EMPLOYES, ADD_EMPLOYE } from "./actions";

const Reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_MODAL:
      return {
        ...state,
        showModal: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_EMPLOYES:
      return {
        ...state,
        employes: payload,
      };
    case ADD_EMPLOYE:
      return {
        ...state,
        employes: [...state.employes, payload],
      };
  }
};

export default Reducer;
