import { RATE_TYPES } from "./types";
import produce, { enableES5 } from "immer";
enableES5();

const INITIAL_STATE = {
  Likes: [],
  Dislikes: [],
};

export const reducer = produce((store, { type, payload }) => {
  switch (type) {
    case RATE_TYPES.INIT_RATES:
      store.Likes = payload.Likes;
      store.Dislikes = payload.Dislikes;
      break;
  }
}, INITIAL_STATE);
