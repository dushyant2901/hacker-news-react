import React from "react";
import { useContext,useReducer } from "react";
import reducer from "./reducer";
const initialState = {};
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={"hi"}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
