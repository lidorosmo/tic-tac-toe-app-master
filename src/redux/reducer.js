const initialState = {
  numOfRows: 3,
  numOfPlayers: 2,
  player1Name: "PlayerX",
  player2Name: "PlayerO",
  player3Name: "Player&Delta;",
  onTime: false,
  gameTime: 60,
  boardArr: Array(9).fill(null),
  playerNumTurn: 1,
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "init/numOfRows":
      return {
        ...state,
        numOfRows: action.numOfRows,
      };
    case "init/numOfPlayers":
      return {
        ...state,
        numOfPlayers: action.numOfPlayers,
      };
    case "init/player1Name":
      return {
        ...state,
        player1Name: action.player1Name,
      };
    case "init/player2Name":
      return {
        ...state,
        player2Name: action.player2Name,
      };
    case "init/player3Name":
      return {
        ...state,
        player3Name: action.player3Name,
      };
    case "init/onTime":
      return {
        ...state,
        onTime: action.onTime,
      };
    case "init/gameTime":
      return {
        ...state,
        gameTime: action.gameTime,
      };
    default:
      return state;
  }
};

export default reducer;
