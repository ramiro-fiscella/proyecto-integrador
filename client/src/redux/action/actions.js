import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_GENDER,
  FILTER_STATUS,
  ORDER_FAVORITES,
} from "./action-types";

import axios from "axios";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      dispatch({
        type: ADD_FAV,
        payload: character,
      });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
};

export const removeFav = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      .then((response) => {
        return dispatch({
          type: REMOVE_FAV,
          payload: response.data,
        });
      });
  };
};

/////////////////////////// F I L T R O S ///////////////////////////

export const filterGender = (gender) => {
  return {
    type: FILTER_GENDER,
    payload: gender,
  };
};

export const filterStatus = (status) => {
  return {
    type: FILTER_STATUS,
    payload: status,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_FAVORITES,
    payload: order,
  };
};
