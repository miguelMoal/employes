import {
  SET_MODAL,
  SET_LOADING,
  SET_EMPLOYES,
  ADD_EMPLOYE,
  DELETE_EMPLOYE,
} from "./actions";

//helpers reducer
import { deleteEmploye } from "./helpersReducer";

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
    case DELETE_EMPLOYE:
      return {
        ...state,
        employes: deleteEmploye(payload, state.employes),
      };
  }
};

export default Reducer;
