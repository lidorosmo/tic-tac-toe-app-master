import * as React from "react";
import { SpinButton } from "@fluentui/react/lib/SpinButton";

// let spinButton = (
//   <SpinButton
//     defaultValue="3"
//     min={3}
//     max={15}
//     step={1}
//     incrementButtonAriaLabel="Increase value by 1"
//     decrementButtonAriaLabel="Decrease value by 1"
//     value
//   />
// );

const BoardSizeChoice = () => {
  return (
    <div className="board-size-choice">
      <label className="label size-label"> Board size:</label>
      <SpinButton
      className="spin-button"
        defaultValue="3"
        min={3}
        max={15}
        step={1}
        incrementButtonAriaLabel="Increase value by 1"
        decrementButtonAriaLabel="Decrease value by 1"
      />
      <p id="board-size-input">X 3</p>
      {/* make sure to update this according to user input*/}
    </div>
  );
};

export default BoardSizeChoice;

/*
notes to self: spinbutton width should be 75
//const styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };
*/
