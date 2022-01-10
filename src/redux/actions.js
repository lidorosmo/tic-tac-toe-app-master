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

export const makeMove = (move) => {
  return {
    type: "game/makeMove",
    move,
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
