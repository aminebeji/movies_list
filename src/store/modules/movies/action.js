import { movies$ } from "@/__mocks__/movies";
import { MOVIE_TYPES } from "./types";

export const INIT_MOIVES_ACTIONS = () => async (dispatch) => {
  let movies = await movies$;

  dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: movies });
};

export const INIT_MOIVES_SEARCH_ACTIONS = (data) => async (dispatch) => {
  let movies = await movies$;
  movies = movies.filter((movie) => {
    if (movie.title.includes(data.keyword)) {
      if (data.category) {
        if (movie.category === data.category) {
          return movie;
        }
      } else return movie;
    }
  });
  dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: movies });
};

export const CHANGE_MOVIES_CATEGORY =
  (category) => async (dispatch, getState) => {
    const { SearchPage, KEYWORD } = getState().Search;
    let movies = await movies$;
    movies = movies.filter((movie) => {
      if (SearchPage) {
        if (!category) {
          if (movie.title.includes(KEYWORD)) {
            return movie;
          }
        } else if (
          movie.title.includes(KEYWORD) &&
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
    dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: movies });
  };

export const DELETE_MOVIE = (id) => async (dispatch, getState) => {
  const movies = getState().Movies.movies;
  movies = movies.filter((movie) => {
    if (movie.id != id) {
      return movie;
    }
  });
  dispatch({ type: MOVIE_TYPES.FETCH_MOVIES_SUCCESS, payload: movies });
};


//***********RATE ACTIONS****************
