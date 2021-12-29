import "./setUpPage.css";
import { useSelector, useDispatch } from "react-redux";
import { numOfPlayers } from "../../redux/actions";

const PlayersNumChoice = () => {
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    if (event.target.value === "1-Player") {
      dispatch(numOfPlayers(1));
    } else if (event.target.value === "2-Players") {
      dispatch(numOfPlayers(2));
    } else {
      dispatch(numOfPlayers(3));
    }
  };

  return (
    <div className="players-num-choice" onChange={changeHandler}>
      <label className="players-choice-label">Choose players</label>
      <div id="playes-radios">
        <input type="radio" value="1-Player" name="players-num" /> 1 Player
        <input type="radio" value="2-Players" name="players-num" /> 2 Players
        <input type="radio" value="3-Players" name="players-num" /> 3 Players
      </div>
    </div>
  );
};

export default PlayersNumChoice;
