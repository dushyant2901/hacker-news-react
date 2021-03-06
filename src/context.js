import React from "react";
import { useContext, useReducer, createContext, useEffect } from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";
const initialState = {
  isLoading: false,
  hits: [],
  page: 0,
  query:'react',
  nbPages:0
};
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, page: data.page ,nbPages: data.nbPages},
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);
  const removeStory = (id) => {
    dispatch({
      type: REMOVE_STORY,
      payload: id,
    });
  };
  const handleSearch=(query)=>{
    dispatch({
        type: HANDLE_SEARCH,
        payload: query,
      });
  }
  const handlePage=(value)=>{
    dispatch({
        type: HANDLE_PAGE,
        payload: value,
      });
  }
  return (
    <AppContext.Provider value={{ ...state ,removeStory,handleSearch,handlePage}}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
