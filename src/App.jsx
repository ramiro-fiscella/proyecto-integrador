import CardContainer from "./components/CardContainer/CardContainer";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

let EMAIL = "ramirofiscella@gmail.com";
let PASSWORD = "mipassword2";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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
    <>
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} onRandomAdd={addRandomCharacter} />
      ) : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<CardContainer characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
