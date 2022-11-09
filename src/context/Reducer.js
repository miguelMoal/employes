import { SET_IS_AUTH, SET_LOADING, SET_USER, SET_MODAL } from "./actions";

const Reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_MODAL:
      return {
        ...state,
        modal: payload,
      };
  }
};

export default Reducer;
