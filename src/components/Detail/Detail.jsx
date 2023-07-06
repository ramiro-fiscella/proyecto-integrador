import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailCard}>
        <h3>ID: {character?.id}</h3>
        <img
          className={styles.img}
          src={character?.image}
          alt={character.name}
        />
        <div className={styles.charInfo}>
          <h3 className={styles.name}>{character?.name}</h3>
          <div className={styles.data}>
            <h3>
              <span>Status:</span> {character?.status}
            </h3>
            <h3>
              <span>Species:</span> {character?.species}
            </h3>
            <h3>
              <span>Gender:</span> {character?.gender}
            </h3>
            <h3>
              <span>Origin:</span> {character?.origin?.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
