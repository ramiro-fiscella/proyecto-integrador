import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  genderFilter,
  statusFilter,
  orderFavorites,
} from "../../redux/action/actions";

import FavCard from "../FavCard/FavCard";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [genderFilter, setGenderFilter] = useState("allCharacters");
  const [statusFilter, setStatusFilter] = useState("allCharacters");
  const [order, setOrder] = useState("A");

  const handleOrder = (event) => {
    const { value } = event.target;
    setOrder(value);
    dispatch(orderFavorites(value)); // Dispatch del ordenamiento
    setAux(true);
  };

  const handleFilter = (event) => {
    const { name, value } = event.target;
    if (name === "genderFilter") {
      setGenderFilter(value);
      dispatch(genderFilter(value)); // Dispatch del filtro de género
    } else if (name === "statusFilter") {
      setStatusFilter(value);
      dispatch(statusFilter(value)); // Dispatch del filtro de estado
    }
  };

  return (
    <div className={styles.myFavs}>
      <div className={styles.buttonBar}>
        <div className={styles.sorter}>
          {/* <label>By Name</label> */}
          <div>
            <button value="A" onClick={handleOrder}>
              ▲
            </button>
            <button value="D" onClick={handleOrder}>
              ▼
            </button>
          </div>
        </div>

        <div className={styles.sorter}>
          {/* <label>By Gender</label> */}
          <select onChange={handleFilter}>
            <option value="allCharacters">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className={styles.sorter}>
          {/* <label>By Status</label> */}
          <select onChange={handleFilter}>
            <option value="allCharacters">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <h2 className={styles.title}>My Favorites</h2>
        {favorites.map(({ id, name, status, image, onClose }) => {
          return (
            <FavCard
              key={id}
              id={id}
              name={name}
              status={status}
              image={image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
