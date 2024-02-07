import React from "react";
import { Link } from "react-router-dom";
import dice from "../img/dice.jpg";
import tic_tac_toe from "../img/tic_tac_toe.jpg";

const Main = () => {
  return (
    <>
      <Link to="dice">
        <div className="container_game">
          <img src={dice} alt="dice" />
        </div>
      </Link>
      <Link to="tic_tac_toe">
        <div className="container_game">
          <img src={tic_tac_toe} alt="tic_tac_toe" />
        </div>
      </Link>
    </>
  );
};

export default Main;
