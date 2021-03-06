import store from "../redux/store";

export function checkWinner() {
  const board = store.getState().boardArr;
  const n = store.getState().numOfRows;
  let winRows = checkWinRows(board, n);
  let winCols = checkWinCols(board, n);
  let winDiagonal = checkWinDiagonal(board, n);
  let winOppositeDiagonal = checkWinOppositeDiagonal(board, n);

  let win = winRows || winCols || winDiagonal || winOppositeDiagonal;

  return win ? "win" : checkTie(board, n) ? "tie" : "notDone";
}

function checkWinRows(board, n) {
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(board[i * n + j]);
    }

    if (checkIdentity(row, n, "row")) {
      console.log("rows are identical");
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
    if (checkIdentity(col, n, "col")) {
      return true;
    }
  }
  return false;
}

function checkWinDiagonal(board, n) {
  let diagonal = [];
  for (let i = 0; i < board.length; i += n + 1) {
    diagonal.push(board[i]);
  }
  return checkIdentity(diagonal, n, "Diag");
}

function checkWinOppositeDiagonal(board, n) {
  let diagonal = [];
  for (let i = n - 1; i < board.length; i += n - 1) {
    diagonal.push(board[i]);
  }
  return checkIdentity(diagonal, n, "oppDiag");
}

function checkIdentity(arr, n, str) {
  for (let i = 0; i < n; i++) {}

  for (let i = 0; i < n; i++) {
    if (!arr[i] || arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

function checkTie(board, n) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return false;
    }
  }
  return true;
}
