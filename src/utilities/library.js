import { incWin1, incWin2 } from "../redux/actions";
import store from "../redux/store";

export function checkWinner() {
  const board = store.getState().boardArr;
  const n = store.getState().numOfRows;
  const player = store.getState().playerNumTurn;

  let winRows = checkWinRows(board, n);
  let winCols = checkWinCols(board, n);
  let winDiagonal = checkWinWinDiagonal(board, n);
  let winOppositeDiagonal = checkWinOppositeDiagonal(board, n);

  let win = winRows || winCols || winDiagonal || winOppositeDiagonal;

  if (win) {
  }

  return win ? "win" : checkTie(board, n) ? "tie" : "notDone";
}

function announceWinner(player) {
  if (player === 1) {
    store.dispatch(incWin1);
  } else if (player === 2) {
    store.dispatch(incWin2);
  }
}

function checkWinRows(board, n) {
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = i; j < n; j++) {
      row.push([board[j]]);
    }
    if (checkIdentity(row, n)) {
      return true;
    }
  }
  return false;
}

function checkWinCols(board, n) {
  for (let i = 0; i < n; i++) {
    let col = [];
    for (let j = 0; j < n; j++) {
      col.push(board[i + j * n]);
    }
    if (checkIdentity(col, n)) {
      return true;
    }
  }
  return false;
}

function checkWinWinDiagonal(board, n) {
  let diagonal = [];
  for (let i = 0; i < (n ^ 2); i += n + 1) {
    diagonal.push(board[i]);
  }
  return checkIdentity(diagonal, n);
}

function checkWinOppositeDiagonal(board, n) {
  let diagonal = [];
  for (let i = n - 1; i < (n ^ 2); i += n - 1) {
    diagonal.push(board[i]);
  }
  return checkIdentity(diagonal, n);
}

function checkIdentity(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[0] !== arr[i] || arr[i] === null) {
      return false;
    }
  }
  return true;
}

function checkTie(board, n) {
  // const board = store.getState().boardArr;
  // const n = store.getState().numOfRows;
  for (let i = 0; i < (n ^ 2); i++) {
    if (board[i] === null) {
      return false;
    }
  }
  return true;
}
