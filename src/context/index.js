import { useReducer, useContext } from "react";
import Reducer from "./Reducer";
import Context from "./Context";

const State = ({ children }) => {
  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const setIsLoading = (data) => {
    dispatch({
      type: "SET_MODAL",
      payload: data,
    });
  };

  return (
    <Context.Provider
      value={{
        loading: state.loading,
        uses: [state, dispatch],

        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useProvider = () => useContext(Context);
const useDispatch = () => useProvider()?.uses[1];
const useStore = () => useProvider()?.uses[0];

const useSetIsLoading = () => useProvider()?.setIsLoading;

export { useStore, useDispatch, useSetIsLoading };

export default State;
