import { useState } from "react";
import "./App.css";
import Dice from "./componets/dice";
import { clearStatistics, initialState } from "./componets/diceUtils";

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
      <div id="container_navbar">
        <h2>There will be navbar!</h2>
        <h2>
          Game statistics: win: {statistics.win} lose: {statistics.lose} draw:
          {statistics.draw}
        </h2>
        <button onClick={() => clearStatistics(setStatistics)}>
          Clear statistics
        </button>
      </div>
      <h3>Start a game against the computer:</h3>
      <div>
        <Dice onChange={changeStatistics} />
      </div>
    </div>
  );
}

export default App;
