import React from "react";
import { clearStatistics } from "./diceUtils";

const NavBar = ({ value, setStat }) => {
  return (
    <div id="container_navbar">
      <h2>There will be navbar!</h2>
      <h2>
        Game statistics: win: {value.win} lose: {value.lose} draw:
        {value.draw}
      </h2>
      <button id="clean_button" onClick={() => clearStatistics(setStat)}>
        Clear statistics
      </button>
    </div>
  );
};

export default NavBar;
