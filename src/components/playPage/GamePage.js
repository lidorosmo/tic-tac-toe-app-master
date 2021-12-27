import React from "react";
import PlayerNamesDisplay from "./PlayerNamesDisplay";
import Timer from "./Timer";
import Messages from "./Messages";
import Board from "./Board";
import CountdownTimer from "./CountdownTimer";
import './stylePlayGame.css';
import Buttons from "./Buttons";

let playersArr = ["PlayerX", "PlayerO", "Player"];

const GamePage = () => {
  //const status = "Current Player is O"; //update later to be dynamic
  //const moves = <li>Something</li>;
  return (
    <div className="game-page">
      <h1 id="header-match">It's a Match!</h1>
      <PlayerNamesDisplay playersNum="3" playersNames={playersArr} />
      <Timer />
      {/* <CountdownTimer /> */}
      <Board />
      <Buttons />
      {/* <Messages moves={...moves} /> */}
      {/*Update according to input*/}
    </div>
  );
};

export default GamePage;
