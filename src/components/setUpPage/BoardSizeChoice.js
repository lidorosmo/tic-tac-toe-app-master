import * as React from "react";
import { SpinButton } from "@fluentui/react/lib/SpinButton";
import { useSelector, useDispatch } from "react-redux";
import { numOfRows } from "../../redux/actions";

const BoardSizeChoice = () => {
  const n = useSelector((state) => state.numOfRows);
  const dispatch = useDispatch();

  const step = 1;

  const handleChange = (e, newValue) => {
    if (Number(newValue) >= 3 && Number(newValue) <= 15) {
      dispatch(numOfRows(Number(newValue)));
    }
  };
  const handleIncremenet = (value) => {
    if (Number(value) < 15) {
      dispatch(numOfRows(Number(value) + Number(step)));
    }
  };
  const handleDecrement = (value) => {
    if (Number(value) > 3) {
      dispatch(numOfRows(Number(value) - Number(step)));
    }
  };
  return (
    <div className="board-size-choice">
      <label className="label size-label"> Board size:</label>
      <SpinButton
        className="spin-button"
        // defaultValue="4"
        min={3}
        max={15}
        step={step}
        incrementButtonAriaLabel="Increase value by 1"
        value={`${n}`}
        onIncrement={handleIncremenet}
        onDecrement={handleDecrement}
        onChange={handleChange}
      />
      <p id="board-size-input">X {n}</p>
    </div>
  );
};

export default BoardSizeChoice;
