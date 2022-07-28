import { movies$ } from "@/__mocks__/movies"
import { MOVIE_TYPES } from "./types"

export const INIT_MOIVES_ACTIONS = () => async (dispatch) => {
    let movies = await movies$
    dispatch({type : MOVIE_TYPES.FETCH_MOVIES_SUCCESS , payload :movies })
}
