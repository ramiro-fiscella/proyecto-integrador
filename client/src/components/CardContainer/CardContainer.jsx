import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContainer = ({ characters, onClose }) => {
  // DESESTRUCTURO CHARACTER DE LAS PROPS

  return (
    <div className={styles.title}>
      <h2>HOME</h2>
      <div className={styles.mainContainer}>
        {characters.map(
          ({ id, name, species, gender, status, image, origin }) => {
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
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CardContainer;
