import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContainer = ({ characters, onClose }) => {
  // DESESTRUCTURO CHARACTER DE LAS PROPS

  return (
    <div className={styles.mainContainer}>
      {characters.map(
        ({ id, name, species, gender, status, image, origin }) => {
          return (
            <Card
              key={id}
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
  );
};

export default CardContainer;
