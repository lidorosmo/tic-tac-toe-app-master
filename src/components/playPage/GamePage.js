import React from "react";
import PlayerNamesDisplay from "./PlayerNamesDisplay";
import Timer from "./Timer";
import Messages from "./Messages";
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

  //const status = "Current Player is O"; //update later to be dynamic
  //const moves = <li>Something</li>;

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
      {/* <Messages moves={...moves} /> */}
    </div>
  );
};

export default GamePage;
