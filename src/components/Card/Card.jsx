import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  console.log(props, "props");

  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.status}>{props.status}</p>
      <img src={props.image} alt={props.name} />

      <div className={styles.data}>
        <p>Species: {props.species}</p>
        <p>Gender: {props.gender}</p>
        <p>Origin: {props.origin}</p>
      </div>

      <button className={styles.closeButton} onClick={props.onClose}>
        remove card
      </button>
    </div>
  );
}
