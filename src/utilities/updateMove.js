import React from "react";
import store from "../redux/store";
import { announceWinner, timesUp } from "../redux/actions";
import { makeMove, incWin1, incWin2, incWin3 } from "../redux/actions";
import { checkWinner } from "./checkWinner";

export function updateMove(tile) {
  console.log("i entered updateMove");
  const state = store.getState();

  //When already clicked- do nothing
  if (state.boardArr[tile] !== null) {
    return;
  }

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

  // console.log("im before make move");
  store.dispatch(makeMove(tile, player, char));
  // console.log("im after make move");

  const gameState = checkWinner(state.boardArr, state.numOfRows, player, name);
  if (gameState === "win") {
    player === 1
      ? store.dispatch(incWin1)
      : player === 2
      ? store.dispatch(incWin2)
      : store.dispatch(incWin3);
    store.dispatch(announceWinner(name));
  } else if (gameState === "tie") {
    store.dispatch(timesUp);
  }
}
