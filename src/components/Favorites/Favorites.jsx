import React from "react";
import { connect, useSelector } from "react-redux";

import Card from "../Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      {favorites.map(({ id, name, species, gender, status, image, origin }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            status={status}
            image={image}
            origin={origin.name}
          />
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
