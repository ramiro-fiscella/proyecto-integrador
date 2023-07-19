import React from "react";
import CardContainer from "../CardContainer/CardContainer";

const Home = ({ CardContainer }) => {
  return (
    <div>
      <h1>ESTO ES EL HOME</h1>
      <CardContainer characters onClose />
    </div>
  );
};

export default Home;
