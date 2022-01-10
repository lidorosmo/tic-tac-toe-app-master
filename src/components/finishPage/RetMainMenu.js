import React from "react";
import { returnToMainMenu } from "../../redux/actions";
import { useDispatch } from "react-redux";

const RetMainMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(returnToMainMenu());
  };
  return (
    <div className="ret-main-menu">
      <button className="button-18 btn-ret-main-menu" onClick={handleClick}>
        main menu
      </button>
    </div>
  );
};

export default RetMainMenu;
