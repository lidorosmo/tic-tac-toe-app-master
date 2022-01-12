import React from "react";
import FinishHeader from "./FinishHeader";
import RestartGame from "./RestartGame";
import RetMainMenu from "./RetMainMenu";
import "./finishPageStyle.css";

const FinishPage = () => {
  return (
    <div className="finish-page">
      <FinishHeader />
      <p className="play-again-p"> Want to play again?</p>
      <RestartGame />
      <RetMainMenu />
    </div>
  );
};

export default FinishPage;
