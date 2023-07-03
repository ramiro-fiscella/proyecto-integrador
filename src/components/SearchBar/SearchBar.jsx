import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch, onRandomAdd }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.buscador}>
      <input type="search" onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        ADD
      </button>
      <button onClick={onRandomAdd}>RANDOM</button>
    </div>
  );
}
