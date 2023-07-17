import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action/action-types";

const initialState = {
  myFavorites: [],
  allFavs: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case FILTER:
      const filteredChars = state.allFavs.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters" ? [...state.allFavs] : filteredChars,
      };

    case ORDER:
      const allFavsCopy = [...state.allFavs];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allFavsCopy.sort((a, b) => a.id - b.id)
            : allFavsCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
