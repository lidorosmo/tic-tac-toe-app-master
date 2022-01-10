import React, { useState, useEffect } from "react";

const Timer = () => {
  const [[mins, secs], setTime] = useState([0, 0]);
  const tick = () => {
    if (secs === 59) {
      setTime([mins + 1, 0]);
    } else {
      setTime([mins, secs + 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="timer">
      <p>
        {mins.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;
