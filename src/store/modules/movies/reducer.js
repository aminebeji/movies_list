import { MOVIE_TYPES } from "./types";
import produce, { enableES5 } from "immer";
enableES5();

const INITIAL_STATE = {
  movies: [],
  current_movie: {},
  loading: true,
  error: {},
};

export const reducer = produce((store, { type, payload }) => {
  switch (type) {
    case MOVIE_TYPES.FETCH_MOVIES_SUCCESS:
      store.loading = false;
      store.movies = payload.movies;
      break;
      case MOVIE_TYPES.INIT_CURRENT_MOVIE : 
      store.current_movie = payload
      break
  }
}, INITIAL_STATE);
