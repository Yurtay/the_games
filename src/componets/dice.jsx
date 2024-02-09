import React, { useEffect, useState } from "react";
import { getRandomNumberInRange, winOrLose } from "./diceUtils";
import { useNavigate } from "react-router-dom";
import RenderDice from "./renderDice";
import rollDice from "../img/dice.jpg";

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
        <button
          onClick={getResultRollDice}
          id="btn_roll_dice"
          className="zoomHover"
        >
          <img
            src={rollDice}
            style={{ width: "70px", display: "inline-block" }}
            alt="roll_dice"
          />
          <h4 id="span_roll_dice">-Roll the dice-</h4>
        </button>
        <div id="show_dice_result">{showResult}</div>
      </div>
      <hr />
      <button className="btn" onClick={() => history("/")}>
        Go main page
      </button>
    </>
  );
};

export default Dice;
