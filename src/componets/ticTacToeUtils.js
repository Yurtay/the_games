import XXX from "../img/xxx.jpg";
import OOO from "../img/ooo.jpg";
import NNN from "../img/nnn.jpg";
import theEnd_0 from "../img/tictactoe_back_0.jpg";
import theEnd_1 from "../img/end_game_1.jpg";
import theEnd_2 from "../img/end_game_2.jpg";
import theEnd_3 from "../img/end_game_3.jpg";
import theEnd_4 from "../img/end_game_4.jpg";
import theEnd_5 from "../img/end_game_5.jpg";
import theEnd_6 from "../img/end_game_6.jpg";
import theEnd_7 from "../img/end_game_7.jpg";
import theEnd_8 from "../img/end_game_8.jpg";

export const initialState = ["N", "N", "N", "N", "N", "N", "N", "N", "N"];
export const indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export function chooseCell(elem) {
  switch (elem) {
    case "O":
      return OOO;
      break;
    case "X":
      return XXX;
      break;
    case "N":
      return NNN;
      break;
    default:
      break;
  }
}

export function checkEndGame(stateCell, setEndGame) {
  function checkCells(cellValue) {
    switch (true) {
      case stateCell[0] === cellValue &&
        stateCell[3] === cellValue &&
        stateCell[6] === cellValue:
        return theEnd_1;
        break;
      case stateCell[1] === cellValue &&
        stateCell[4] === cellValue &&
        stateCell[7] === cellValue:
        return theEnd_2;
        break;
      case stateCell[2] === cellValue &&
        stateCell[5] === cellValue &&
        stateCell[8] === cellValue:
        return theEnd_3;
        break;
      case stateCell[0] === cellValue &&
        stateCell[1] === cellValue &&
        stateCell[2] === cellValue:
        return theEnd_4;
        break;
      case stateCell[3] === cellValue &&
        stateCell[4] === cellValue &&
        stateCell[5] === cellValue:
        return theEnd_5;
        break;
      case stateCell[6] === cellValue &&
        stateCell[7] === cellValue &&
        stateCell[8] === cellValue:
        return theEnd_6;
        break;
      case stateCell[0] === cellValue &&
        stateCell[4] === cellValue &&
        stateCell[8] === cellValue:
        return theEnd_7;
        break;
      case stateCell[2] === cellValue &&
        stateCell[4] === cellValue &&
        stateCell[6] === cellValue:
        return theEnd_8;
        break;
      default:
        return null;
        break;
    }
  }

  const checkFromX = checkCells("X");
  const checkFromO = checkCells("O");
  const result = checkFromX ? checkFromX : checkFromO ? checkFromO : theEnd_0;

  return result;
}
