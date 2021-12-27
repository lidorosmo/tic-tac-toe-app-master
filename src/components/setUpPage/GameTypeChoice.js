import * as React from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Slider } from "@fluentui/react";
//import { Slider, IStackTokens, Stack, IStackStyles } from "@fluentui/react";


const GameTypeChoice = () => {
  return (
    <div className="game-type-choice">
      <Slider
        className="game-type-slider"
        label="Seconds limit"
        min={30}
        max={120}
        step={10}
        defaultValue={60}
        showValue
        snapToStep
      />
      <div className="btn-start">
      <PrimaryButton className="btn-start-regular button-18" text="START GAME!" />
      <PrimaryButton className="btn-start-on-time button-18" text="START WITH TIME LIMIT!" />
      </div>
    </div>
  );
};

export default GameTypeChoice;
