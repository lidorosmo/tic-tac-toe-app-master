import React from "react";

const PlayerNamesDisplay = ({ playersNum, playersNames }) => {
  let displayNames;
  if (playersNum === 1) {
    displayNames = <div>{playersNames[0]} vs Computer</div>;
  } else if (playersNum === 2) {
    displayNames = (
      <div>
        {playersNames[0]} vs {playersNames[1]}
      </div>
    );
  } else {
    displayNames = (
      <div>
        {playersNames[0]} vs {playersNames[1]} vs {playersNames[2]}&Delta;
      </div>
    );
  }
  return <div className="player-names-display">{displayNames}</div>;
};

export default PlayerNamesDisplay;
