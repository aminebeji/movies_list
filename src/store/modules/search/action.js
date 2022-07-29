import { movies$ } from "@/__mocks__/movies";
import { SEARCH_TYPES } from "./types";

export const SEARCH_TYPYING = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_TYPES.CHANGE_KEYWORD, payload: keyword });
};

export const SEARCH_INIT_ACTION = (data) => async (dispatch) => {
  dispatch({ type: SEARCH_TYPES.INIT_SEARCH, payload: data });
};

export const INIT_CATEGORYLIST = (deleted) => async (dispatch, getState) => {
  let movies =   await movies$
movies = !deleted ? movies : getState().Movies.movies
  let category = movies.map((movie) => {
    return movie.category;
  });
  category = [...new Set(category)];
  dispatch({ type: SEARCH_TYPES.INIT_CATEGORYLIST, payload: category });
};
export const CHANGE_CATEGORY = (data) => async(dispatch) =>  {
  dispatch({type : SEARCH_TYPES.CHANGE_CATEGORY , payload : data})
}