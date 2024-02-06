import React from "react";
import { useNavigate } from "react-router-dom";

const TicTacToe = () => {
  const history = useNavigate();
  return (
    <>
      <h1>Tic tac toe</h1>
      <button className="button_back_main_page" onClick={() => history("/")}>
        Go main page
      </button>
    </>
  );
};

export default TicTacToe;
