import React from "react";
import PlayerNamesDisplay from "./PlayerNamesDisplay";
import Timer from "./Timer";
import Messages from "./Messages";
import Board from "./Board";
import CountdownTimer from "./CountdownTimer";
import "./stylePlayGame.css";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

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
      {currState.onTime === false && <Timer />}
      {currState.onTime === true && (
        <CountdownTimer MinSec={currState.gameTime} />
      )}
      <Board />
      <Buttons />
      {/* <Messages moves={...moves} /> */}
      {/*Update according to input*/}
    </div>
  );
};

export default GamePage;
