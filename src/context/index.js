import { useReducer, useContext } from "react";
import Reducer from "./Reducer";
import Context from "./Context";

const State = ({ children }) => {
  const initialState = {
    loading: false,
    showModal: false,
    employes: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const setModal = (show) => {
    dispatch({
      type: "SET_MODAL",
      payload: show,
    });
  };

  const setLoading = (show) => {
    dispatch({
      type: "SET_LOADING",
      payload: show,
    });
  };

  const setEmployes = (employes) => {
    dispatch({
      type: "SET_EMPLOYES",
      payload: employes,
    });
  };

  const addEmploye = (employe) => {
    dispatch({
      type: "ADD_EMPLOYE",
      payload: employe,
    });
  };

  return (
    <Context.Provider
      value={{
        loading: state.loading,
        showModal: state.showModal,
        employes: state.employes,
        uses: [state, dispatch],

        setModal,
        setLoading,
        setEmployes,
        addEmploye,
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
const useSetLoading = () => useProvider()?.setLoading;
const useSetEmployes = () => useProvider()?.setEmployes;
const useAddEmploye = () => useProvider()?.addEmploye;

export {
  useStore,
  useDispatch,
  useSetModal,
  useSetLoading,
  useSetEmployes,
  useAddEmploye,
};

export default State;
