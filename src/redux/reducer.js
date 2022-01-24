const initialState = {
  numOfRows: 3,
  numOfPlayers: 2,
  player1Name: "Player1",
  player2Name: "Player2",
  player3Name: "Player3",
  player1Char: "X",
  player2Char: "O",
  player3Char: "R",
  onTime: false,
  gameTime: { minutes: 1, seconds: 0 },
  boardArr: Array(9).fill(null),
  playerNumTurn: 1,
  pageDisplay: "setUp",
  winner: "Tie",
  player1Wins: 0,
  player2Wins: 0,
  player3Wins: 0,
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "init/numOfRows":
      return {
        ...state,
        numOfRows: action.numOfRows,
        boardArr: Array(action.numOfRows * action.numOfRows).fill(null),
      };
    case "init/numOfPlayers":
      return {
        ...state,
        numOfPlayers: action.numOfPlayers,
      };
    case "init/player1Name":
      console.log("in reducer player1Name is: " + action.player1Name);

      return {
        ...state,
        player1Name: action.player1Name,
      };
    case "init/player2Name":
      console.log("in reducer player2Name is: " + action.player2Name);
      return {
        ...state,
        player2Name: action.player2Name,
      };
    case "init/player3Name":
      return {
        ...state,
        player3Name: action.player3Name,
      };
    case "init/player1Char":
      return {
        ...state,
        player1Char: action.player1Char,
      };
    case "init/player2Char":
      return {
        ...state,
        player2Char: action.player2Char,
      };
    case "init/player3Char":
      return {
        ...state,
        player3Char: action.player3Char,
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
    case "init/startNewGame":
      return {
        ...state,
        pageDisplay: action.payload,
      };
    case "game/makeMove":
      const boardArrCpy = [...state.boardArr];
      boardArrCpy[action.payload.index] = action.payload.char;
      const nextPlayer =
        action.payload.player === 1
          ? 2
          : action.payload.player === 2 && state.numOfPlayers === 3
          ? 3
          : 1;
      return {
        ...state,
        boardArr: boardArrCpy,
        playerNumTurn: nextPlayer,
      };
    case "game/announceWinner":
      return {
        ...state,
        winner: action.playerName,
        pageDisplay: "finish",
      };
    case "game/incWin1":
      return {
        ...state,
        player1Wins: state.player1Wins + 1,
      };
    case "game/incWin2":
      return {
        ...state,
        player2Wins: state.player2Wins + 1,
      };
    case "game/incWin3":
      return {
        ...state,
        player3Wins: state.player3Wins + 1,
      };
    case "game/retMainMenu":
      return {
        ...initialState,
      };
    case "game/timesUp":
      return {
        ...state,
        pageDisplay: "finish",
      };
    case "restart":
      const boardArrCpy1 = state.boardArr.slice();
      boardArrCpy1.fill(null);
      return {
        ...state,
        boardArr: boardArrCpy1,
        playerNumTurn: 1,
        pageDisplay: "play",
      };
    default:
      return state;
  }
};

export default reducer;
