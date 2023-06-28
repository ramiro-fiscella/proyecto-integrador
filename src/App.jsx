import "./App.css";
import React from "react";

import CardContainer from "./components/CardContainer/CardContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <CardContainer characters={characters} />
    </div>
  );
}

export default App;
