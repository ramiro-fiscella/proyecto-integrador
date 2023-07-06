import { addFav, removeFav } from "../../redux/action/actions";
import { connect } from "react-redux";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  image,
  species,
  gender,
  origin,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [character, setCharacters] = useState({});
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        image,
        species,
        gender,
        origin,
        onClose,
        addFav,
        removeFav,
        myFavorites,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.status}>{status}</p>
        <img src={image} alt={name} />
        <p className={styles.id}>ID: {id}</p>
      </Link>

      <div className={styles.buttons}>
        <button className={styles.closeButton} onClick={() => onClose(id)}>
          ✖️
        </button>
        {isFav ? (
          <button className={styles.favButton} onClick={handleFavorite}>
            💚
          </button>
        ) : (
          <button className={styles.favButton} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
