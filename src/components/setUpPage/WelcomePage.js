import React from "react";
import BoardSizeChoice from "./BoardSizeChoice";
import GameTypeChoice from "./GameTypeChoice";
import HeaderWelcome from "./HeaderWelcome";
import PlayersNamesChoice from "./PlayersNamesChoice";
import PlayersNumChoice from "./PlayersNumChoice";

const WelcomePage = () => {
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
