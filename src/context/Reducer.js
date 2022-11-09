import { SET_MODAL } from "./actions";

const Reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_MODAL:
      return {
        ...state,
        showModal: payload,
      };
  }
};

export default Reducer;
