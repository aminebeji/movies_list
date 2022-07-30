import { RATE_TYPES } from "./types";
import { getValue, SetValue } from "@/utils/localStorage";

export const INIT_RATES_ACTIONS = () => async (dispatch) => {
  let Likes = getValue("likes");
  let Dislikes = getValue("dislike");
  dispatch({
    type: RATE_TYPES.INIT_RATES,
    payload: { Likes: Likes ? Likes : [], Dislikes: Dislikes ? Dislikes : [] },
  });
};

export const ADD_RATE = (Likes , Dislikes) => async (dispatch, getState) => {
  SetValue("likes" , Likes)
  SetValue("dislike" , Dislikes)
  dispatch({
    type: RATE_TYPES.INIT_RATES,
    payload: { Likes: Likes ? Likes : [], Dislikes: Dislikes ? Dislikes : [] },
  });
};
