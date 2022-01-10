import * as React from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { useDispatch } from "react-redux";
import { returnToMainMenu } from "../../redux/actions";

const Buttons = () => {
  const dispatch = useDispatch();
  const handleClickMainMenu = () => {
    dispatch(returnToMainMenu());
  };

  return (
    <div className="btn-restart ">
      <PrimaryButton className="button-18" text="restart" />
      <PrimaryButton
        className="btn-return button-18"
        text="main menu"
        onClick={handleClickMainMenu}
      />
    </div>
  );
};

export default Buttons;
