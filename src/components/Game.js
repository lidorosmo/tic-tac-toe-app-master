import React from "react";
import FinishPage from "./finishPage/FinishPage";
import GamePage from "./playPage/GamePage";
import WelcomePage from "./setUpPage/WelcomePage";
import { initializeIcons } from "@fluentui/react/lib/Icons";
// import store from "../redux/store";
import { useSelector } from "react-redux";

initializeIcons("spoprod-a.akamaihd.net");

const Game = () => {
  const pageDisplay = useSelector((state) => state.pageDisplay);

  return (
    <div className="game">
      {pageDisplay === "setUp" && <WelcomePage />}
      {pageDisplay === "play" && <GamePage />}
      {pageDisplay === "finish" && <FinishPage />}
    </div>
  );
};

export default Game;
