import React, { useEffect, useState } from "react";
import { getRandomNumberInRange, winOrLose } from "./diceUtils";
import { useNavigate } from "react-router-dom";
import RenderDice from "./renderDice";

const Dice = ({ changeStat }) => {
  const history = useNavigate();

  const [resultRollDice, setResultRollDice] = useState({
    yourFirstRoll: 0,
    yourSecondRoll: 0,
    computerFirstRoll: 0,
    computerSecondRoll: 0,
  });
  const [showResult, setShowResult] = useState(null);

  function getResultRollDice() {
    setResultRollDice({
      yourFirstRoll: getRandomNumberInRange(1, 6),
      yourSecondRoll: getRandomNumberInRange(1, 6),
      computerFirstRoll: getRandomNumberInRange(1, 6),
      computerSecondRoll: getRandomNumberInRange(1, 6),
    });
  }
  useEffect(() => {
    setShowResult(winOrLose(resultRollDice));
    changeStat();
  }, [resultRollDice]);
  return (
    <>
      <div className="container_game">
        <button onClick={getResultRollDice}>Roll the dice</button>
        <div>
          <div className="container_result">
            <h2>Your dice roll:</h2>
            <RenderDice
              one={resultRollDice.yourFirstRoll}
              two={resultRollDice.yourSecondRoll}
            />

            <h2>
              Your result:
              {resultRollDice.yourFirstRoll + resultRollDice.yourSecondRoll}
            </h2>
          </div>
          <div className="container_result">
            <h2>Computer dice roll:</h2>
            <RenderDice
              one={resultRollDice.computerFirstRoll}
              two={resultRollDice.computerSecondRoll}
            />
            <h2>
              Computer result:
              {resultRollDice.computerFirstRoll +
                resultRollDice.computerSecondRoll}
            </h2>
          </div>
        </div>
        <div>{showResult}</div>
      </div>
      <hr />
      <button className="button_back_main_page" onClick={() => history("/")}>
        Go main page
      </button>
    </>
  );
};

export default Dice;
