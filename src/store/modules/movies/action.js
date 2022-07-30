import { movies$ } from "@/__mocks__/movies";
import { MOVIE_TYPES } from "./types";
import { movies } from "../../../../movies";

export const INIT_MOIVES_ACTIONS = () => async (dispatch) => {
  let movies = await movies$;
  dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: { movies } });
};

export const INIT_MOIVES_SEARCH_ACTIONS = (data) => async (dispatch) => {
  let movies = await movies$;
  movies = movies.filter((movie) => {
    if (movie.title.toLowerCase().includes(data.keyword.toLowerCase())) {
      if (data.category) {
        if (movie.category === data.category) {
          return movie;
        }
      } else return movie;
    }
  });
  dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: { movies } });
};

export const CHANGE_MOVIES_CATEGORY =
  (category) => async (dispatch, getState) => {
    const { SearchPage, KEYWORD } = getState().Search;
    let movies = await movies$;
    movies = movies.filter((movie) => {
      if (SearchPage) {
        if (!category) {
          if (movie.title.toLowerCase().includes(KEYWORD.toLowerCase())) {
            return movie;
          }
        } else if (
          movie.title.toLowerCase().includes(KEYWORD.toLowerCase()) &&
          movie.category === category
        ) {
          return movie;
        }
      } else {
        if (category) {
          if (category === movie.category) return movie;
        } else {
          return movie;
        }
      }
    });
    dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: { movies } });
  };

export const DELETE_MOVIE = (id) => async (dispatch, getState) => {
  const movies = getState().Movies.movies;
  movies = movies.filter((movie) => {
    if (movie.id != id) {
      return movie;
    }
  });
  dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: { movies } });
};

export const SET_CURRENT_MOVIE = (id) => async (dispatch, getState) => {
  let movies = getState().Movies.movies;
  let currentMovie = movies.find((m) => m.id === id);
  if (!currentMovie) {
    return 404
  }else {
    dispatch({type : MOVIE_TYPES.INIT_CURRENT_MOVIE ,payload : currentMovie })
    return 200
  }
};
 