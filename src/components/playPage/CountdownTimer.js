import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  timesUp,
  incWin1,
  incWin2,
  incWin3,
  announceWinner,
} from "../../redux/actions";
import { checkWinner } from "../../utilities/checkWinner";

const CountdownTimer = ({ MinSec }) => {
  const dispatch = useDispatch();
  const state = useState((state) => state);
  const { minutes = 0, seconds = 30 } = MinSec;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      const gamesStatus = checkWinner();
      if (gamesStatus === "win") {
        const name =
          state.playerNumTurn === 1
            ? state.player1Name
            : state.playerNumTurn === 2
            ? state.player2Name
            : state.player3Name;
        state.playerNumTurn === 1
          ? dispatch(incWin1())
          : state.playerNumTurn === 2
          ? dispatch(incWin2())
          : dispatch(incWin3());
        dispatch(announceWinner(name));
      } else {
        dispatch(timesUp());
      }
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="coundown-timer">
      <p>
        {mins.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default CountdownTimer;
