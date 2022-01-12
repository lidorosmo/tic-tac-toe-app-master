import * as React from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { useDispatch } from "react-redux";
import { returnToMainMenu, restart } from "../../redux/actions";

const Buttons = () => {
  const dispatch = useDispatch();
  const handleClickMainMenu = () => {
    dispatch(returnToMainMenu());
  };
  const handleClickRestart = () => {
    dispatch(restart());
  };

  return (
    <div className="btn-restart ">
      {/* <PrimaryButton
        className="button-18"
        text="restart"
        onClick={handleClickRestart}
      /> */}
      <PrimaryButton
        className="btn-return button-18"
        text="main menu"
        onClick={handleClickMainMenu}
      />
    </div>
  );
};

export default Buttons;
