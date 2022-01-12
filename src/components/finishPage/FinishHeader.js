import React from "react";
import { useSelector } from "react-redux";

const FinishHeader = () => {
  const winner = useSelector((state) => state.winner);
  let display = <p>{winner} Won!!</p>;
  if (winner === "tie") {
    display = <p>It's a tie!!</p>;
  }
  return <div className="finish-header">{display}</div>;
};

export default FinishHeader;
