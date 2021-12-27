import React, { useState, useEffect } from "react";

const CountdownTimer = ({ MinSec }) => {
  const { minutes = 0, seconds = 30 } = MinSec;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      reset();
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

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
