import React from "react";
import { useSelector } from "react-redux";

const LeadingBoard = () => {
  const state = useSelector((state) => state);
  let display = (
    <p>
      {state.player1Wins} : {state.player2Wins} : {state.player3Wins}
    </p>
  );
  if (state.numOfPlayers === 1) {
    display = <p>You won {state.player1Wins} times </p>;
  } else if (state.numOfPlayers === 2) {
    display = (
      <p>
        {state.player1Wins} : {state.player2Wins}
      </p>
    );
  }

  return <div className="leading-board">{display}</div>;
};

export default LeadingBoard;
