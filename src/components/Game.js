import React from "react";
import FinishPage from "./finishPage/FinishPage";
import GamePage from "./playPage/GamePage";
import WelcomePage from "./setUpPage/WelcomePage";

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
