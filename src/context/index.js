import { useReducer, useContext } from "react";
import Reducer from "./Reducer";
import Context from "./Context";

const State = ({ children }) => {
  const initialState = {
    loading: false,
    showModal: true,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const setModal = (show) => {
    dispatch({
      type: "SET_MODAL",
      payload: show,
    });
  };

  return (
    <Context.Provider
      value={{
        loading: state.loading,
        showModal: state.showModal,
        uses: [state, dispatch],

        setModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useProvider = () => useContext(Context);
const useDispatch = () => useProvider()?.uses[1];
const useStore = () => useProvider()?.uses[0];

const useSetModal = () => useProvider()?.setModal;

export { useStore, useDispatch, useSetModal };

export default State;
