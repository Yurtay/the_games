import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkEndGame,
  chooseCell,
  indexArray,
  initialState,
} from "./ticTacToeUtils";

const TicTacToe = () => {
  const [stateCell, setStateCell] = useState(initialState);
  const [stateIndex, setStateIndex] = useState(indexArray);
  const [whoIsWalking, setWhoIsWalking] = useState("player_1");
  const [typeGame, setTypeGame] = useState("p_vs_p");
  const [endGame, setEndGame] = useState("0");
  const history = useNavigate();

  function getRandomArrayElement(array) {
    return Math.floor(Math.random() * array.length);
  }

  function handleChangeCell(i) {
    const newStateCell = [...stateCell];
    const newStateIndex = [...stateIndex];
    newStateCell[i] = whoIsWalking === "player_1" ? "X" : "O";
    newStateIndex.filter((el) => el !== i);
    setStateIndex(newStateIndex.filter((el) => el !== i));
    setStateCell(newStateCell);
    setWhoIsWalking(whoIsWalking === "player_1" ? "player_2" : "player_1");

    // console.log(newStateCell[getRandomArrayElement(newStateCell)]);
  }
  function handleStartOver() {
    setStateCell(initialState);
    setStateIndex(indexArray);
  }
  console.log(endGame);
  return (
    <>
      <div
        id="container_game_tictactoe"
        style={{
          backgroundImage: `url(" ${checkEndGame(stateCell, setEndGame)} ")`,
        }}
      >
        {stateCell.map((el, index) => {
          return (
            <div
              key={index}
              className="container_cell"
              onClick={() => handleChangeCell(index)}
            >
              <img src={chooseCell(el)} alt="cell" />
            </div>
          );
        })}
      </div>
      <br />
      <button onClick={handleStartOver}>Start over</button>
      <button onClick={() => setTypeGame("p_vs_p")}>-Player vs Player-</button>
      <button onClick={() => setTypeGame("p_vs_c")}>
        -Player vs Computer-
      </button>
      <h4>
        {whoIsWalking === "player_1" ? "Player 1 move..." : "Player 2 move..."}
      </h4>
      <hr />
      <button className="button_back_main_page" onClick={() => history("/")}>
        Go main page
      </button>
    </>
  );
};

export default TicTacToe;
