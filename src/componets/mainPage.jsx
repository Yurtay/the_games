import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to="dice">
        <div className="container_game">DICE</div>
      </Link>
      <Link to="tic_tac_toe">
        <div className="container_game">TIC TAC TOE</div>
      </Link>
    </>
  );
};

export default Main;
