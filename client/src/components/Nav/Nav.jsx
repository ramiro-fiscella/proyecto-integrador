import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

import SearchBar from "../SearchBar/SearchBar.jsx";

const Nav = ({ onSearch, onRandomAdd }) => {
  return (
    <nav className={styles.navFondo}>
      <div className={styles.navBar}>
        <div>
          <Link to="/home">
            <img src="src\assets\imgs\favicon.png" alt="" />
          </Link>
        </div>
        <SearchBar onSearch={onSearch} onRandomAdd={onRandomAdd} />
        <div className={styles.navigation}>
          <Link to="/fav">
            <button>Favorites</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
