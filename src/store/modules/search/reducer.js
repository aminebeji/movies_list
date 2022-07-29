import { SEARCH_TYPES } from "./types";
import produce, { enableES5 } from "immer";
enableES5();

const INITIAL_STATE = {
  CATEGORY: "",
  KEYWORD: "",
  CategoryList : [],
  SearchPage : false
};

export const reducer = produce((store, { type, payload }) => {
  switch (type) {
    case SEARCH_TYPES.INIT_SEARCH:
      store.CATEGORY = payload.category;
      store.KEYWORD = payload.keyword;
      store.SearchPage = true
      break;
    case SEARCH_TYPES.CHANGE_KEYWORD:
      store.KEYWORD = payload;
      break;
      case SEARCH_TYPES.INIT_CATEGORYLIST : 
      store.CategoryList = payload 
      break
      case SEARCH_TYPES.CHANGE_CATEGORY : 
      store.CATEGORY = payload
      break
  }
}, INITIAL_STATE);
