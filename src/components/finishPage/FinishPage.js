import React from "react";
import FinishHeader from "./FinishHeader";
import RestartGame from "./RestartGame";
import RetMainMenu from "./RetMainMenu";
import "./finishPageStyle.css";

const FinishPage = ({ winner }) => {
  return (
    <div className="finish-page">
      <FinishHeader winner={winner} />
      <p className="play-again-p"> Want to play again?</p>
      <RestartGame />
      <RetMainMenu />
    </div>
  );
};

export default FinishPage;
