import React from "react";
import diceZero from "../img/dice0.png";
import diceOne from "../img/dice1.png";
import diceTwo from "../img/dice2.png";
import diceTree from "../img/dice3.png";
import diceFour from "../img/dice4.png";
import diceFive from "../img/dice5.png";
import diceSix from "../img/dice6.png";

const RenderDice = ({ one, two }) => {
  function renderImg(numb) {
    switch (numb) {
      case 1:
        return diceOne;
        break;
      case 2:
        return diceTwo;
        break;
      case 3:
        return diceTree;
        break;
      case 4:
        return diceFour;
        break;
      case 5:
        return diceFive;
        break;
      case 6:
        return diceSix;
        break;

      default:
        return diceZero;
        break;
    }
  }
  return (
    <div>
      <div className="container_dice_img">
        <img className="dice_img" src={renderImg(one)} alt="no render one" />
      </div>
      <div className="container_dice_img">
        <img className="dice_img" src={renderImg(two)} alt="no render two" />
      </div>
    </div>
  );
};

export default RenderDice;
