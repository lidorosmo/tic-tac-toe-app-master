import React from "react";
import { useDispatch } from "react-redux";
import { restart } from "../../redux/actions";
const RestartGame = (props) => {
  const dispatch = useDispatch();

  const handleClickRestart = () => {
    dispatch(restart());
  };

  return (
    <div className="restart-game">
      <button
        className="button-18 restart-game-btn"
        onClick={handleClickRestart}
      >
        play again
      </button>
    </div>
  );
};

export default RestartGame;
