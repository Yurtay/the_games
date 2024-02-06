import React, { useEffect, useState } from "react";
import { getRandomNumberInRange, winOrLose } from "./diceUtils";

const Dice = ({ onChange }) => {
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
    onChange();
  }, [resultRollDice]);
  return (
    <div>
      <button onClick={getResultRollDice}>Roll the dice</button>
      <div>
        <div className="container_result">
          <h2>
            Your dice roll:
            {`1 dice: ${resultRollDice.yourFirstRoll}, 2 dice: ${resultRollDice.yourSecondRoll}`}
          </h2>
          <h2>
            Your result:
            {resultRollDice.yourFirstRoll + resultRollDice.yourSecondRoll}
          </h2>
        </div>
        <div className="container_result">
          <h2>
            Computer dice roll:
            {`1 dice: ${resultRollDice.computerFirstRoll}, 2 dice: ${resultRollDice.computerSecondRoll}`}
          </h2>
          <h2>
            Computer result:
            {resultRollDice.computerFirstRoll +
              resultRollDice.computerSecondRoll}
          </h2>
        </div>
      </div>
      <div>{showResult}</div>
    </div>
  );
};

export default Dice;
