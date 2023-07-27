import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  orderCards,
  filterStatus,
  filterGender,
} from "../../redux/action/actions";

import FavCard from "../FavCard/FavCard";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const [aux, setAux] = useState(0);
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterStatus = (event) => {
    dispatch(filterStatus(event.target.value));
  };
  const handleFilterGender = (event) => {
    dispatch(filterGender(event.target.value));
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
          <select onChange={handleFilterGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className={styles.sorter}>
          {/* <label>By Status</label> */}
          <select onChange={handleFilterStatus}>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div>
        <h2 className={styles.title}>My Favorites</h2>
        <div className={styles.mainContainer}>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
