import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import CardContainer from "./components/CardContainer/CardContainer";
import Nav from "./components/Nav/Nav";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (characters.find((char) => char.id === data.id)) {
          return alert("Este personaje ya ha sido agregado!");
        } else {
          if (data.id) {
            setCharacters((characters) => [...characters, data]);
            setId("");
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      });
  };

  const addRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then((response) => response.data)
      .then((data) => {
        if (characters.find((char) => char.id === data.id)) {
          addRandomCharacter();
        } else {
          if (data.id) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      });
  };

  const onClose = (id) => {
    const filteredChars = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filteredChars);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} onRandomAdd={addRandomCharacter} />
      <CardContainer characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
