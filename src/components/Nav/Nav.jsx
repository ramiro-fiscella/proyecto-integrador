import SearchBar from "../SearchBar/SearchBar.jsx";

import styles from "./Nav.module.css";

import React from "react";

const Nav = ({ onSearch, onRandomAdd }) => {
  return (
    <nav className={styles.navFondo}>
      <div className={styles.navBar}>
        <div>
          <a href="home">
            <img src="src\assets\imgs\logo.svg" alt="" />
          </a>
        </div>
        <SearchBar onSearch={onSearch} onRandomAdd={onRandomAdd} />
        <div>
          <button href="/about">About</button>
          <button href="/home">Home</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
