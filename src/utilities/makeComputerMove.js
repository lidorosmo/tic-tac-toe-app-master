import store from "../redux/store";
import { makeMove, incWin2, announceWinner, timesUp } from "../redux/actions";
import { checkWinner } from "./checkWinner";

function makeComputerMove() {
  const numOfPlayers = store.getState().numOfPlayers;
  if (numOfPlayers > 1) {
    return;
  }
  const board = store.getState().boardArr;
  let index;
  for (let i = 0; i < board.length; i++) {
    index = randomIntFromInterval(0, board.length - 1);
    if (!board[index]) {
      break;
    }
  }
  const charP1 = store.getState().player1Char;
  if (charP1 === "O") {
    store.dispatch(makeMove(index, 2, "X"));
  } else {
    store.dispatch(makeMove(index, 2, "O"));
  }
  //Check if computer won
  const gameState = checkWinner();
  if (gameState === "win") {
    store.dispatch(incWin2());
    store.dispatch(announceWinner("computer"));
  } else if (gameState === "tie") {
    store.dispatch(timesUp());
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default makeComputerMove;
