import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_GENDER,
  FILTER_STATUS,
  ORDER_FAVORITES,
} from "./action/action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      const isCharacterInFavorites = state.myFavorites.some(
        (character) => character.id === payload.id
      );
      if (isCharacterInFavorites) {
        // If the character is already a favorite, return the current state without making any changes
        return state;
      } else {
        // If the character is not already a favorite, add it to the favorites array
        return {
          ...state,
          myFavorites: [...state.myFavorites, payload],
        };
      }

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER_GENDER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === payload
        ),
      };

    case FILTER_STATUS:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.status === payload
        ),
      };

    case ORDER_FAVORITES:
      const sortedCharacters = [...state.allCharacters];
      sortedCharacters.sort((a, b) => {
        if (payload === "A") {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        } else {
          if (a > b) return -1;
          if (a < b) return 1;
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    default:
      return state;
  }
};

export default rootReducer;
