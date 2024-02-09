import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dice from "./componets/dice";
import { initialState } from "./componets/diceUtils";
import NavBar from "./componets/navBar";
import Main from "./componets/mainPage";
import TicTacToe from "./componets/ticTacToe";
import DescriptionApp from "./componets/descriptionApp";

function App() {
  const [statistics, setStatistics] = useState(initialState);
  function changeStatistics() {
    setStatistics({
      win: localStorage.getItem("win") || 0,
      lose: localStorage.getItem("lose") || 0,
      draw: localStorage.getItem("draw") || 0,
    });
  }
  return (
    <div className="App">
      <NavBar setStat={setStatistics} value={statistics} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          exact
          path="/dice"
          element={<Dice changeStat={changeStatistics} />}
        />
        <Route
          exact
          path="/tic_tac_toe"
          element={<TicTacToe changeStat={changeStatistics} />}
        />
      </Routes>
      <DescriptionApp />
    </div>
  );
}

export default App;
