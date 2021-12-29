import React, { useState } from "react";
import BoardSizeChoice from "./BoardSizeChoice";
import GameTypeChoice from "./GameTypeChoice";
import HeaderWelcome from "./HeaderWelcome";
import PlayersNamesChoice from "./PlayersNamesChoice";
import PlayersNumChoice from "./PlayersNumChoice";

const WelcomePage = () => {
  // const [numOfRows, setNumOfRows] = useState(3);
  // const [numOfPlayers, setNumOfPlayers] = useState(2);
  // const [player1Name, setPlayer1Name] = useState("PlayerX");
  // const [player2Name, setPlayer2Name] = useState("PlayerO");
  // const [player3Name, setPlayer3Name] = useState("Player&Delta;");
  // const [onTime, setOnTime] = useState(false);
  // const [gameTime, setGameTime] = useState(60);

  // const gameData = {
  //   numOfRows,
  //   numOfPlayers,
  //   player1Name,
  //   player2Name,
  //   player3Name,
  //   onTime,
  //   gameTime,
  // };

  return (
    <div className="welcome-page">
      <HeaderWelcome />
      <div className="welcome-wrapper">
        <BoardSizeChoice />
        <PlayersNumChoice />
        <PlayersNamesChoice />
        <GameTypeChoice />
      </div>
      <footer className="footer">©Developed by Lidor Osmo</footer>
    </div>
  );
};

export default WelcomePage;
