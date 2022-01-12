export const numOfRows = (numOfRows) => {
  // console.log("im in numofplayers action");
  return {
    type: "init/numOfRows",
    numOfRows,
  };
};

export const numOfPlayers = (numOfPlayers) => {
  return {
    type: "init/numOfPlayers",
    numOfPlayers,
  };
};

export const player1Name = (player1Name) => {
  return {
    type: "init/player1Name",
    player1Name,
  };
};

export const player2Name = (player2Name) => {
  return {
    type: "init/player2Name",
    player2Name,
  };
};

export const player3Name = (player3Name) => {
  return {
    type: "init/player3Name",
    player3Name,
  };
};

export const player1Char = (player1Char) => {
  return {
    type: "init/player1Char",
    player1Char,
  };
};

export const player2Char = (player3Char) => {
  return {
    type: "init/player2Char",
    player2Char,
  };
};

export const player3Char = (player3Char) => {
  return {
    type: "init/player3Char",
    player3Char,
  };
};

export const onTime = (onTime) => {
  return {
    type: "init/onTime",
    onTime,
  };
};

export const gameTime = (gameTime) => {
  return {
    type: "init/gameTime",
    gameTime,
  };
};

export const startNewGame = () => {
  return {
    type: "init/startNewGame",
    payload: "play",
  };
};

export const makeMove = (index, player, char) => {
  return {
    type: "game/makeMove",
    payload: {
      index,
      player,
      char,
    },
  };
};

export const announceWinner = (playerName) => {
  return {
    type: "game/announceWinner",
    playerName,
  };
};

export const incWin1 = () => {
  return {
    type: "game/incWin1",
  };
};

export const incWin2 = () => {
  return {
    type: "game/incWin2",
  };
};

export const incWin3 = () => {
  return {
    type: "game/incWin3",
  };
};

export const returnToMainMenu = () => {
  return {
    type: "game/retMainMenu",
  };
};

export const timesUp = () => {
  return {
    type: "game/timesUp",
  };
};

export const restart = () => {
  return {
    type: "restart",
  };
};
