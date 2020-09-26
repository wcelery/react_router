import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//make initial state
const initialState = {
  favorites: [],
};

//create some context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  const addToFavorites = (movie) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ favorites: state.favorites, addToFavorites }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
