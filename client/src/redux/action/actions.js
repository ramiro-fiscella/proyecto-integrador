import {
  ADD_FAV,
  REMOVE_FAV,
  GENDER_FILTER,
  STATUS_FILTER,
  ORDER_FAVORITES,
} from "./action-types";

import axios from "axios";

export const addFav = (character) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((response) => {
        return dispatch({
          type: ADD_FAV,
          payload: response.data,
        });
      });
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

export const genderFilter = (gender) => {
  return {
    type: GENDER_FILTER,
    payload: gender,
  };
};

export const statusFilter = (status) => {
  return {
    type: STATUS_FILTER,
    payload: status,
  };
};

export const orderFavorites = (order) => {
  return {
    type: ORDER_FAVORITES,
    payload: order,
  };
};
