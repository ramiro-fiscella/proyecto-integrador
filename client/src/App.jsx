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

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const response = await axios.get(URL, { params: { email, password } });

      const { access } = response.data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.error("Error :", error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = response.data;

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
    } catch (error) {
      console.error("Error: ", error.message);
    }
  };

  const addRandomCharacter = async () => {
    try {
      const randomId = Math.floor(Math.random() * 826) + 1;
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );
      const data = response.data;

      if (characters.find((char) => char.id === data.id)) {
        addRandomCharacter();
      } else {
        if (data.id) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    } catch (error) {
      console.error("Error: ", error.message);
    }
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
        <Route path="/fav" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
