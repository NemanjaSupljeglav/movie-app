import React, { createContext, useReducer } from "react";

import { getFunc } from "../services/mainApiServiices";
import appReducer from "./AppReducer";

const initialState = {
  moviesOrSeries: {
    data: [],
    loading: false
  },
  oneMovieOrSerie: null
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getMoviesOrSeries = async (data, type) => {
    dispatch({ type: "GET_MOVIES_REQ" });

    const response = await getFunc(`?type=${type}&s=${data}`);

    if (response.status === 200) {
      dispatch({
        type: "GET_MOVIES_SCS",
        payload: { data: response.data, total: response.total }
      });
    } else {
      dispatch({ type: "GET_MOVIES_FLR" });
      console.log(response.status.description);
    }
  };

  function clearMoviesOrSeries(data) {
    dispatch({ type: "CLEAR_MOVIES" });
  }

  const getOneMovieOrSerie = async data => {
    const response = await getFunc(`?i=${data}`);

    if (response.status === 200) {
      dispatch({
        type: "GET_ONE_MOVIE",
        payload: { data: response.data, total: response.total }
      });
    } else {
      console.log(response.status.description);
    }
  };

  function clearOneMovieOrSerie(data) {
    dispatch({ type: "CLEAR_ONE_MOVIE" });
  }
  return (
    <GlobalContext.Provider
      value={{
        moviesOrSeries: state.moviesOrSeries,
        oneMovieOrSerie: state.oneMovieOrSerie,
        getMoviesOrSeries,
        clearMoviesOrSeries,
        getOneMovieOrSerie,
        clearOneMovieOrSerie
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
