import {
  ADD_FAV,
  REMOVE_FAV,
  GENDER_FILTER,
  STATUS_FILTER,
  ORDER_FAVORITES,
} from "./action-types";

import axios from "axios";

export const addFav = async (character) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    return {
      type: ADD_FAV,
      payload: character,
    };
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

// export const addFav = (character) => {
//   return function (dispatch) {
//     axios
//       .post("http://localhost:3001/rickandmorty/fav", character)
//       .then((response) => {
//         return dispatch({
//           type: ADD_FAV,
//           payload: response.data,
//         });
//       });
//   };
// };

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
