import {
  ADD_FAV,
  REMOVE_FAV,
  GENDER_FILTER,
  STATUS_FILTER,
  ORDER_FAVORITES,
} from "./action/action-types";

const initialState = {
  myFavorites: [],
  allFavs: [],
  genderFilter: null,
  status: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case GENDER_FILTER:
      return {
        ...state,
        genderFilter: payload,
      };
    case STATUS_FILTER:
      return {
        ...state,
        status: payload,
      };

    case ORDER_FAVORITES:
      return {
        ...state,
        order: payload,
      };
    default:
      return state;
  }
};

export default reducer;
