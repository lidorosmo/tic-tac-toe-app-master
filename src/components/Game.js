import React from "react";
import FinishPage from "./finishPage/FinishPage";
import GamePage from "./playPage/GamePage";
import WelcomePage from "./setUpPage/WelcomePage";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons("spoprod-a.akamaihd.net");

const Game = () => {
  return (
    <div className="game">
      <WelcomePage />
      {/* <GamePage /> */}
      {/* <FinishPage winner={"PlayerO"} /> */}
    </div>
  );
};

export default Game;
