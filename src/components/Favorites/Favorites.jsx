import React from "react";
import { connect, useSelector } from "react-redux";

import Card from "../Card/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={styles.mainContainer}>
      {favorites.map(({ id, name, status, image }) => {
        return (
          <Card key={id} id={id} name={name} status={status} image={image} />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
