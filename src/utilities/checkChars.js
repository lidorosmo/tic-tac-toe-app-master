import store from "../redux/store";

export function checkChars() {
  const numOfPlayers = store.getState().numOfPlayers;
  const player1Char = store.getState().player1Char;
  const player2Char = store.getState().player2Char;
  const player3Char = store.getState().player3Char;

  if (numOfPlayers === 1) {
    return true;
  } else if (numOfPlayers === 2) {
    if (player1Char === player2Char) {
      return false;
    }
  }
  if (
    player1Char === player2Char ||
    player1Char === player3Char ||
    player2Char === player3Char
  ) {
    return false;
  }

  return true;
}
