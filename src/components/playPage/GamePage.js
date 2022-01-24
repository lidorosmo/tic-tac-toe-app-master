import React from "react";
import PlayerNamesDisplay from "./PlayerNamesDisplay";
import Timer from "./Timer";
import Board from "./Board";
import CountdownTimer from "./CountdownTimer";
import Buttons from "./Buttons";
import LeadingBoard from "./LeadingBoard";
import { useSelector } from "react-redux";
import "./stylePlayGame.css";

const GamePage = () => {
  const currState = useSelector((state) => state);
  let playersArr = [
    currState.player1Name,
    currState.player2Name,
    currState.player3Name,
  ];
  return (
    <div className="game-page">
      <h1 id="header-match">It's a Match!</h1>
      <PlayerNamesDisplay
        playersNum={currState.numOfPlayers}
        playersNames={playersArr}
      />
      <LeadingBoard />
      {currState.onTime === false && <Timer />}
      {currState.onTime === true && (
        <CountdownTimer MinSec={currState.gameTime} />
      )}
      <Board />
      <Buttons />
    </div>
  );
};

export default GamePage;
