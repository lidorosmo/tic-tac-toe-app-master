const initialState = {
  numOfRows: 3,
  player1: "PlayerX",
  player2: "PlayerO",
  player3: "Player&Delta;",
  boardArr: Array(9).fill(null),
  playerTurn: 1,
};

const TictactoeReducer = function (state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default TictactoeReducer;
