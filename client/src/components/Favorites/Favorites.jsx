import { React, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action/actions";

import Card from "../Card/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={styles.buttonBar}>
        <button value="A" onClick={handleOrder}>
          ▲
        </button>
        <button value="D" onClick={handleOrder}>
          ▼
        </button>

        <select onChange={handleFilter}>
          <option value="allCharacters">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <div className={styles.mainContainer}>
          {favorites.map(({ id, name, status, image, onClose }) => {
            return (
              <Card
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
