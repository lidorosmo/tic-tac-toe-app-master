import store from "../redux/store";
import { makeMove, incWin2, announceWinner, timesUp } from "../redux/actions";
import { checkWinner } from "./checkWinner";

function makeComputerMove() {
  const numOfPlayers = store.getState().numOfPlayers;
  // const gameState = store.getState()
  if (numOfPlayers > 1) {
    return;
  }
  const board = store.getState().boardArr;
  const n = store.getState().numOfRows;
  let index;
  for (let i = 0; i < board.length; i++) {
    index = randomIntFromInterval(0, board.length - 1);
    if (!board[index]) {
      break;
    }
  }
  console.log("i found random index to be:" + index);
  store.dispatch(makeMove(index, 2, "O"));
  //Check if computer won
  const gameState = checkWinner();
  console.log(gameState);
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
