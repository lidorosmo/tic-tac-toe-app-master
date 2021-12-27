import * as React from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";

const Buttons = () => {
  return (
    <div className="btn-restart ">
      <PrimaryButton className="button-18" text="restart" />
      <PrimaryButton className="btn-return button-18" text="main menu" />
    </div>
  );
};

export default Buttons;
