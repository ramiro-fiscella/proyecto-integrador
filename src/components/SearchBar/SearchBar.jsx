import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={styles.navBar}>
      <div>
        <img src="src\assets\imgs\logo.svg" alt="" />
      </div>
      <div className={styles.buscador}>
        <input type="search" />
        <button // CUANDO CLICKEO EL BOTON LE PASO UNA FUNCION ANONIMA QUE TOMA EL ID INGRESADO Y LO "BUSCA" (POR AHORA DE MENTIRITAS)
          onClick={(id) => {
            onSearch(id);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
