import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { lighten, modularScale } from "polished";
import {
  makeMove,
  incWin3,
  incWin2,
  incWin1,
  announceWinner,
  timesUp,
} from "../../redux/actions";
import { checkWinner } from "../../utilities/checkWinner";
import makeComputerMove from "../../utilities/makeComputerMove";
// import { updateMove } from "../../utilities/updateMove";

const Tile = ({ index }) => {
  // console.log("the index sent to Tile is: " + index);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const charToDisplay = state.boardArr[index];
  console.log("----------------------------");
  if (index === 0) {
    console.log(state.boardArr);
  }

  const player = state.playerNumTurn;
  const char =
    player === 1
      ? state.player1Char
      : player === 2
      ? state.player2Char
      : state.player3Char;

  const handleTileClick = () => {
    if (!state.boardArr[index]) {
      const name =
        player === 1
          ? state.player1Name
          : player === 2
          ? state.player2Name
          : state.player3Name;

      dispatch(makeMove(index, player, char));
      const gameState = checkWinner();
      if (gameState === "win") {
        player === 1
          ? dispatch(incWin1())
          : player === 2
          ? dispatch(incWin2())
          : dispatch(incWin3());
        console.log("winning cond is:" + gameState + ", player:" + player);
        dispatch(announceWinner(name));
      } else if (gameState === "tie") {
        dispatch(timesUp());
      }

      //if played against computer- make computer's move
      makeComputerMove();
    }
  };

  function onEnter(e) {
    if (!state.boardArr[index]) {
      e.target.textContent = char;
      // e.target.style.opacity = "0.4";
      // e.target.style.background = "red";
      // e.target.style.background = "rgba(250,250, 250, 0.5)";
      e.target.style.background = "rgba(55,75, 85, 0.5)";
    }
  }
  function onLeave(e) {
    if (!state.boardArr[index]) {
      e.target.style.background = "#203a43";
      e.target.textContent = charToDisplay;
      // e.target.style.opacity = "0.9";
    }
  }
  return (
    <div className="tile" /*key={index}*/>
      <button
        className="tile-btn"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handleTileClick}
      >
        {charToDisplay}
      </button>
    </div>
  );
};

export default Tile;
