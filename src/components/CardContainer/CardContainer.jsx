import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

export default function CardContainer({ characters }) {
  // DESESTRUCTURO CHARACTER DE LAS PROPS

  const onClose = () => window.alert("Emulación de cierre de card");
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
}
