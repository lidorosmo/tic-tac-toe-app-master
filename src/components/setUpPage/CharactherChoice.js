import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { player1Char, player2Char, player3Char } from "../../redux/actions";

const CharacterChoice = () => {
  const dispatch = useDispatch();
  const numOfPlayers = useSelector((state) => state.numOfPlayers);

  return (
    <div className="char-choice">
      <label className="char-label" for="players-form">
        Get funky with your characters (recommended: not more than 1 char)
      </label>
      <form className="players-form char-form">
        <input
          type="text"
          placeholder="X"
          // maxlength="1"
          onChange={(event) => {
            dispatch(player1Char(event.target.value));
          }}
        />
        {numOfPlayers >= 2 && (
          <input
            type="text"
            placeholder="O"
            // maxlength="1"
            className="second-player-name"
            onChange={(event) => {
              dispatch(player2Char(event.target.value));
            }}
          />
        )}
        {numOfPlayers === 3 && (
          <input
            type="text"
            placeholder="&Delta;"
            // maxlength="1"
            onChange={(event) => {
              dispatch(player3Char(event.target.value));
            }}
          />
        )}
      </form>
    </div>
  );
};

export default CharacterChoice;
