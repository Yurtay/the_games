export const winOrLose = (resultRollDice) => {
  if (
    resultRollDice.yourFirstRoll + resultRollDice.yourSecondRoll >
    resultRollDice.computerFirstRoll + resultRollDice.computerSecondRoll
  ) {
    localStorage.setItem("win", Number(localStorage.getItem("win")) + 1);
    return "YOU WIN!";
  } else if (
    resultRollDice.yourFirstRoll + resultRollDice.yourSecondRoll <
    resultRollDice.computerFirstRoll + resultRollDice.computerSecondRoll
  ) {
    localStorage.setItem("lose", Number(localStorage.getItem("lose")) + 1);
    return "YOU LOSE!";
  } else if (
    resultRollDice.yourFirstRoll + resultRollDice.yourSecondRoll ===
    0
  ) {
    return "Roll the dice!";
  } else if (
    resultRollDice.yourFirstRoll + resultRollDice.yourSecondRoll ===
    resultRollDice.computerFirstRoll + resultRollDice.computerSecondRoll
  ) {
    localStorage.setItem("draw", Number(localStorage.getItem("draw")) + 1);
    return "The result of the game is a draw!";
  }
};

export function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const initialState = {
  win: localStorage.getItem("win") || 0,
  lose: localStorage.getItem("lose") || 0,
  draw: localStorage.getItem("draw") || 0,
};

export function clearStatistics(fun) {
  fun({
    win: 0,
    lose: 0,
    draw: 0,
  });
  localStorage.setItem("win", 0);
  localStorage.setItem("lose", 0);
  localStorage.setItem("draw", 0);
}
