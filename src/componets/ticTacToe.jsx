import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkEndGame,
  chooseCell,
  indexArray,
  initialState,
  situationGame,
} from "./ticTacToeUtils";

const TicTacToe = ({ changeStat }) => {
  const [stateCell, setStateCell] = useState(initialState);
  const [stateIndex, setStateIndex] = useState(indexArray);
  const [typeGame, setTypeGame] = useState("p_vs_c");
  const [whoIsWalking, setWhoIsWalking] = useState("player_1");
  const [resultCheckEndGame, setResultCheckEndGame] = useState(
    checkEndGame(stateCell)
  );
  const history = useNavigate();

  function getRandomArrayElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function handleChangeCell(i) {
    if (stateCell[i] === "N") {
      const newStateCell = [...stateCell];
      if (typeGame === "p_vs_p") {
        newStateCell[i] = whoIsWalking === "player_1" ? "X" : "O";
        setStateCell(newStateCell);
        setWhoIsWalking(whoIsWalking === "player_1" ? "player_2" : "player_1");
        const resultCheckGame = checkEndGame(newStateCell);
        setResultCheckEndGame(resultCheckGame);
      } else {
        const newArrayIndex = [...stateIndex];
        newStateCell[i] = "X";
        const newStateIndexAfterPlayer = newArrayIndex.filter((el) => el !== i);

        const computerMove = getRandomArrayElement(newStateIndexAfterPlayer);
        newStateCell[computerMove] = "O";
        const newStateIndex = newStateIndexAfterPlayer.filter(
          (el) => el !== computerMove
        );
        const resultCheckGame = checkEndGame(newStateCell);
        setResultCheckEndGame(resultCheckGame);
        setStateCell(newStateCell);
        setStateIndex(newStateIndex);
        setWhoIsWalking("player_1");
      }
    }
  }
  function handleStartOver() {
    setStateCell(initialState);
    setStateIndex(indexArray);
    setResultCheckEndGame(checkEndGame(initialState));
  }
  function handleChangeTypeGameToPvP() {
    setResultCheckEndGame(checkEndGame(initialState));
    setTypeGame("p_vs_p");
    setStateCell(initialState);
  }
  function handleChangeTypeGameToPvC() {
    setResultCheckEndGame(checkEndGame(initialState));
    setTypeGame("p_vs_c");
    setStateIndex(indexArray);
    setStateCell(initialState);
  }

  useEffect(() => {
    if (typeGame === "p_vs_c" && stateIndex.length < 1) {
      localStorage.setItem("draw", Number(localStorage.getItem("draw")) + 1);
      changeStat();
    }
    if (typeGame === "p_vs_c" && resultCheckEndGame.winner !== null) {
      if (resultCheckEndGame.winner === "X") {
        localStorage.setItem("win", Number(localStorage.getItem("win")) + 1);
        changeStat();
      } else {
        localStorage.setItem("lose", Number(localStorage.getItem("lose")) + 1);
        changeStat();
      }
    }
  }, [resultCheckEndGame]);
  return (
    <>
      <div
        id="container_game_tictactoe"
        style={{
          backgroundImage: `url(" ${resultCheckEndGame.checkCell} ")`,
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

      <h4>
        {situationGame(typeGame, whoIsWalking, resultCheckEndGame.winner)}
      </h4>
      <button
        id={
          typeGame === "p_vs_c"
            ? "btn_type_game_active_p_vs_c"
            : "btn_type_game_p_vs_c"
        }
        className="btn btn-one"
        onClick={handleChangeTypeGameToPvC}
      >
        -Player vs Computer-
      </button>
      <button
        id={
          typeGame === "p_vs_p"
            ? "btn_type_game_active_p_vs_p"
            : "btn_type_game_p_vs_p"
        }
        className="btn btn-one"
        onClick={handleChangeTypeGameToPvP}
      >
        -Player vs Player-
      </button>
      <button onClick={handleStartOver} className="btn">
        Start over
      </button>
      <button
        className="btn button_back_main_page"
        onClick={() => history("/")}
      >
        Go main page
      </button>
    </>
  );
};

export default TicTacToe;
