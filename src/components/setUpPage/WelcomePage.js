import React, { useState } from "react";
import BoardSizeChoice from "./BoardSizeChoice";
import CharacterChoice from "./CharactherChoice";
import GameTypeChoice from "./GameTypeChoice";
import HeaderWelcome from "./HeaderWelcome";
import PlayersNamesChoice from "./PlayersNamesChoice";
import PlayersNumChoice from "./PlayersNumChoice";
import "./setUpPage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <HeaderWelcome />
      <div className="welcome-wrapper">
        <BoardSizeChoice />
        <PlayersNumChoice />
        <PlayersNamesChoice />
        <CharacterChoice />
        <GameTypeChoice />
      </div>
      <footer className="footer">©Developed by Lidor Osmo</footer>
    </div>
  );
};

export default WelcomePage;
