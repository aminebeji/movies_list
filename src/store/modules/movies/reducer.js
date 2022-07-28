import { MOVIE_TYPES } from './types';
import produce, { enableES5 } from 'immer';
enableES5();

const INITIAL_STATE = {
    movies: [],
    current_movie: {},
    loading: true,
    error: {},
    current_page: 1,
};

export const reducer = produce((store, { type, payload }) => {
    switch (type) {
        case MOVIE_TYPES.FETCH_MOVIES_SUCCESS:
            store.loading = false
            store.movies = payload
            break;

    }
}, INITIAL_STATE);
