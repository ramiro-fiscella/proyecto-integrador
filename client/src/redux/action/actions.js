import {
  ADD_FAV,
  REMOVE_FAV,
  GENDER_FILTER,
  STATUS_FILTER,
  ORDER_FAVORITES,
} from "./action-types";

import axios from "axios";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
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
