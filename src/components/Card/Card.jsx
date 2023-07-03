import styles from "./Card.module.css";

const Card = ({
  id,
  name,
  status,
  image,
  species,
  gender,
  origin,
  onClose,
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.status}>{status}</p>
      <img src={image} alt={name} />

      <div className={styles.data}>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
      </div>

      <button className={styles.closeButton} onClick={() => onClose(id)}>
        remove card
      </button>
    </div>
  );
};

export default Card;
