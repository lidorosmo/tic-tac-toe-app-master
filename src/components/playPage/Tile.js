import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  makeMove,
  incWin3,
  incWin2,
  incWin1,
  announceWinner,
  timesUp,
} from "../../redux/actions";
import { checkWinner } from "../../utilities/checkWinner";
// import { updateMove } from "../../utilities/updateMove";

const Tile = (index) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const charToDisplay = state.boardArr[index];
  // const hoverStyling = {
  //   cursor: "+ charToDisplay +",
  // };

  const handleTileClick = () => {
    if (!state.boardArr[index]) {
      const player = state.playerNumTurn;
      const char =
        player === 1
          ? state.player1Char
          : player === 2
          ? state.player2Char
          : state.player3Char;
      const name =
        player === 1
          ? state.player1Name
          : player === 2
          ? state.player2Name
          : state.player3Name;

      dispatch(makeMove(index, player, char));
      const gameState = checkWinner(
        state.boardArr,
        state.numOfRows,
        player,
        name
      );
      console.log("game status:" + gameState);
      if (gameState === "win") {
        player === 1
          ? dispatch(incWin1())
          : player === 2
          ? dispatch(incWin2())
          : dispatch(incWin3());
        console.log("WinsP1:" + incWin1);
        dispatch(announceWinner(name));
      } else if (gameState === "tie") {
        dispatch(timesUp());
      }
    }
  };

  return (
    <div className="tile" key={index}>
      <button
        className="tile-btn"
        // style={hoverStyling}
        onClick={handleTileClick}
      >
        {charToDisplay}
      </button>
    </div>
  );
};

export default Tile;
