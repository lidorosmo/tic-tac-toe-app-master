import * as React from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Slider } from "@fluentui/react";
import { useSelector, useDispatch } from "react-redux";
import { gameTime, onTime, startNewGame } from "../../redux/actions";

const GameTypeChoice = () => {
  const dispatch = useDispatch();

  const handleChanged = (e, value) => {
    let minSec = { minutes: Math.floor(value / 60), seconds: value % 60 };
    dispatch(gameTime(minSec));
  };

  const handleClickWithTime = () => {
    dispatch(onTime(true));
    dispatch(startNewGame());
  };
  const handleClick = () => {
    dispatch(onTime(false));
    dispatch(startNewGame());
  };

  return (
    <div className="game-type-choice">
      <Slider
        className="game-type-slider"
        label="Seconds limit"
        min={30}
        max={120}
        step={10}
        // defaultValue={`${secs}`}
        defaultValue={60}
        showValue
        snapToStep
        onChanged={handleChanged}
      />
      <div className="btn-start">
        <PrimaryButton
          className="btn-start-regular button-18"
          text="START GAME!"
          onClick={handleClick}
        />
        <PrimaryButton
          className="btn-start-on-time button-18"
          text="START WITH TIME LIMIT!"
          onClick={handleClickWithTime}
        />
      </div>
    </div>
  );
};

export default GameTypeChoice;
